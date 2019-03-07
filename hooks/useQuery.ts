import React from 'react';
import { useGraphQL } from 'graphql-react';

import useToken from ':hooks/useToken';

export default (query: string, optionsOverride = {}) => {
  const { token } = useToken();
  const { cacheValue, load, loading } = useGraphQL({
    fetchOptionsOverride(options: object) {
      Object.assign(options, {
        headers: {
          Authorization: token,
        },
        url: process.env.GRAPHQL_URL,
        ...optionsOverride,
      });
    },
    loadOnMount: !!token,
    operation: {
      query,
    },
  });
  React.useEffect(() => {
    if (token) {
      load();
    }
  }, [token]);
  return { cacheValue, loading };
};
