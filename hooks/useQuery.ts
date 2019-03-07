import { useGraphQL } from 'graphql-react';

export default (query: string, optionsOverride = {}) =>
  useGraphQL({
    fetchOptionsOverride(options: object) {
      Object.assign(options, {
        url: process.env.GRAPHQL_URL,
        ...optionsOverride,
      });
    },
    operation: {
      query,
    },
  });
