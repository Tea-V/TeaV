import React from 'react';

type Callback = (isIntersecting: boolean) => void;

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

export default <T extends HTMLElement>() => {
  if (process.browser) {
    intersectionObserver =
      intersectionObserver || new IntersectionObserver(callback);
    const [isIntersecting, setIsIntersecting] = React.useState(false);
    const target = React.useRef<T | null>(null);
    const { current: currentTarget } = target;
    const unobserve = () => {
      if (currentTarget) {
        intersectionObserver.unobserve(currentTarget);
      }
    };
    React.useEffect(() => {
      if (currentTarget) {
        intersectionObserver.observe(currentTarget);
        targetCallbacks.set(currentTarget, setIsIntersecting);
      }
      return unobserve;
    }, [currentTarget, unobserve]);
    return { isIntersecting, targetRef: target, unobserve };
  }
  return { isIntersecting: false, targetRef: undefined, unobserve() {} };
};
