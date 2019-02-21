const importAuth = import('@aws-amplify/auth').then(({ default: Auth }) => {
  Auth.configure({
    cookieStorage: {
      domain: process.env.DOMAIN,
      expires: 365,
      path: '/',
      secure: true,
    },
    mandatorySignIn: true,
    region: process.env.AWS_REGION,
    userPoolId: process.env.USER_POOL_ID,
    userPoolWebClientId: process.env.USER_POOL_APP_CLIENT_ID,
  });
  return Auth;
});

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

export { isAuthenticated, signIn, signOut };
