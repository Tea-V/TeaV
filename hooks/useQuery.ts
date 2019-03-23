import { useGraphQL } from 'graphql-react';

export default <T extends object>({
  query,
  token,
  variables = {},
}: {
  query: string;
  token: string;
  variables?: object;
}): {
  cacheValue?: { data?: T };
  loading: boolean;
} =>
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
      variables,
    },
  });
