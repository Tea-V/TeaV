import { useGraphQL } from 'graphql-react';

export default (query: string, token: string) =>
  useGraphQL({
    fetchOptionsOverride(options: object) {
      Object.assign(options, {
        headers: {
          Authorization: token,
        },
        url: process.env.GRAPHQL_URL,
      });
    },
    operation: {
      query,
    },
  });
