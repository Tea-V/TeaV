interface Memo {
  cache: WeakMap<object, any>;
}

export default <T extends (...args: (object | undefined)[]) => any>(
  fn: T
): T & Memo => {
  const defaultKey = {};
  const memo = (...args: (object | undefined)[]) => {
    const [key = defaultKey] = args;
    const { cache } = memo;
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  };
  memo.cache = new WeakMap();
  // @ts-ignore Type is not assignable to type 'T'.
  return memo;
};
