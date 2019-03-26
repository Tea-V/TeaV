import { useGraphQL } from 'graphql-react';

export interface CacheValue<T extends object> {
  data?: T;
}

export interface UseQueryArgs {
  query: string;
  token: string;
  variables?: object;
}

export default <T extends object>({
  query,
  token,
  variables = {},
}: UseQueryArgs): {
  cacheValue?: CacheValue<T>;
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
