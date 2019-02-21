const importAuth = import('@aws-amplify/auth');

const isAuthenticated = async () => {
  const { default: Auth } = await importAuth;
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
  const { default: Auth } = await importAuth;
  try {
    await Auth.signIn({ password, username });
    return true;
  } catch {
    return false;
  }
};

const signOut = async () => {
  const { default: Auth } = await importAuth;
  await Auth.signOut();
};

export { isAuthenticated, signIn, signOut };
