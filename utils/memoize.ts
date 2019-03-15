interface MemoizedFn {
  cache: WeakMap<object, any>;
}

export default <T extends (...args: (object | undefined)[]) => any>(
  fn: T
): T & MemoizedFn => {
  const defaultKey = {};
  const memoizedFn = (...args: (object | undefined)[]) => {
    const [key = defaultKey] = args;
    const { cache } = memoizedFn;
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
  memoizedFn.cache = new WeakMap();
  // @ts-ignore Type is not assignable to type 'T'.
  return memoizedFn;
};
