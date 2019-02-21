import React from 'react';

type Callback = (isIntersecting: boolean) => any;

const targetCallbacks = new WeakMap<Element, Callback>();

let intersectionObserver: IntersectionObserver;

function callback(entries: IntersectionObserverEntry[]) {
  entries.forEach(({ intersectionRatio, isIntersecting, target }) => {
    window.requestIdleCallback(() => {
      const targetCallback = targetCallbacks.get(target);
      if (targetCallback && intersectionRatio >= 0) {
        targetCallback(isIntersecting);
      }
    });
  });
}

export default () => {
  if (process.browser) {
    intersectionObserver =
      intersectionObserver || new IntersectionObserver(callback);
    const [isIntersecting, setIsIntersecting] = React.useState(false);
    const [target, setTarget] = React.useState<Element | null>(null);
    const unobserve = () => {
      if (target) {
        intersectionObserver.unobserve(target);
      }
    };
    React.useEffect(() => {
      if (target) {
        targetCallbacks.set(target, setIsIntersecting);
        intersectionObserver.observe(target);
      }
      return unobserve;
    }, [target]);
    return {
      isIntersecting,
      setTarget,
      unobserve,
    };
  }
  return {
    isIntersecting: false,
    setTarget() {},
    unobserve() {},
  };
};
