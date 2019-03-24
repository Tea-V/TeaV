/* eslint-disable @typescript-eslint/no-explicit-any */

type Options = {
  trailing: boolean;
};

const defaultOptions = {
  trailing: true,
};

export default <T extends (...args: any[]) => any>(
  fn: T,
  timeout: number,
  options: Options = defaultOptions
): T => {
  const { trailing } = options;
  let handle = 0;
  let lastArgs: any[] | null = null;
  const throttledFn = (...args: any[]) => {
    if (trailing) {
      lastArgs = args;
    }
    if (handle === 0) {
      handle = window.setTimeout(() => {
        fn(...(lastArgs || args));
        handle = 0;
        lastArgs = null;
      }, timeout);
    }
  };
  // @ts-ignore Type is not assignable to type 'T'.
  return throttledFn;
};
