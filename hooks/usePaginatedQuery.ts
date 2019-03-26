import React from 'react';

import deepMerge from ':utils/deepMerge';

import useQuery, { CacheValue, UseQueryArgs } from './useQuery';

export default <T extends object>(
  useQueryArgs: UseQueryArgs,
  dependencies: unknown[] = []
) => {
  const [cacheValue, setCacheValue] = React.useState<CacheValue<T> | undefined>(
    undefined
  );
  const { cacheValue: fetchedCacheValue, loading } = useQuery<T>(useQueryArgs);
  React.useEffect(() => {
    setCacheValue(undefined);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, dependencies);
  React.useEffect(() => {
    setCacheValue(
      (prevCacheValue = {}) =>
        fetchedCacheValue && deepMerge(prevCacheValue, fetchedCacheValue)
    );
  }, [fetchedCacheValue]);
  return { cacheValue, loading };
};
