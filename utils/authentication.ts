const importAuth = import('@aws-amplify/auth').then(({ default: Auth }) => {
  const {
    AWS_REGION,
    DOMAIN,
    NODE_ENV,
    USER_POOL_APP_CLIENT_ID,
    USER_POOL_ID,
  } = process.env;
  const config = {
    mandatorySignIn: true,
    region: AWS_REGION,
    userPoolId: USER_POOL_ID,
    userPoolWebClientId: USER_POOL_APP_CLIENT_ID,
  };
  if (NODE_ENV === 'production') {
    Object.assign(config, {
      cookieStorage: {
        domain: DOMAIN,
        expires: 30,
        path: '/',
        secure: true,
      },
    });
  }
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
