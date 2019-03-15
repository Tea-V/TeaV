import React from 'react';

const defaultOptions = {
  passive: true,
};

export default (
  type: string,
  listener: EventListener,
  options: AddEventListenerOptions = defaultOptions
) => {
  React.useEffect(() => {
    addEventListener(type, listener, options);
    return () => {
      removeEventListener(type, listener, options);
    };
  }, []);
};
