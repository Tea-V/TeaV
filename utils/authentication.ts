const importAuth = import('@aws-amplify/auth').then(({ default: Auth }) => {
  const config = {
    cookieStorage: {
      domain: process.env.DOMAIN,
      expires: 30,
      secure: process.env.NODE_ENV === 'production',
    },
    mandatorySignIn: true,
    region: process.env.AWS_REGION,
    userPoolId: process.env.USER_POOL_ID,
    userPoolWebClientId: process.env.USER_POOL_APP_CLIENT_ID,
  };
  Auth.configure(config);
  return Auth;
});

const getToken = async () => {
  const Auth = await importAuth;
  try {
    const currentSession = await Auth.currentSession();
    return currentSession.getIdToken().getJwtToken();
  } catch {
    return null;
  }
};

const isAuthenticated = async () => {
  const Auth = await importAuth;
  try {
    await Auth.currentAuthenticatedUser();
    return true;
  } catch {
    return false;
  }
};

const signIn = async ({
  password,
  username,
}: {
  password: string;
  username: string;
}) => {
  const Auth = await importAuth;
  try {
    await Auth.signIn({ password, username });
    return true;
  } catch {
    return false;
  }
};

const signOut = async () => {
  const Auth = await importAuth;
  await Auth.signOut();
};

export { getToken, isAuthenticated, signIn, signOut };
