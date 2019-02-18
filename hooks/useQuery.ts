import { useGraphQL } from 'graphql-react';

export default (optionsOverride = {}, query: string) =>
  useGraphQL({
    fetchOptionsOverride(options: object) {
      options = {
        ...options,
        url: process.env.GRAPHQL_URL,
        ...optionsOverride,
      };
    },
    operation: {
      query,
    },
  });
