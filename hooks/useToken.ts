import React from 'react';

import { getToken } from ':utils/authentication';

export default () => {
  const [token, setToken] = React.useState<string | null>(null);
  getToken().then(setToken);
  return { token };
};
