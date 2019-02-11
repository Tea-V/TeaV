import React from 'react';

import Shimmer from ':components/Shimmer';
import useIsIntersecting from ':hooks/useIsIntersecting';

type Props = {
  alt?: string;
  forceLoad?: boolean;
  height?: string;
  sizes?: string;
  src?: string;
  srcSet?: string;
  width?: string;
};

export default React.memo<Props>(
  ({
    alt,
    forceLoad = false,
    height = '100%',
    sizes,
    src,
    srcSet,
    width = '100%',
  }) => {
    const [loading, setLoading] = React.useState(!forceLoad);
    const { isIntersecting, setTarget, unobserve } = useIsIntersecting();
    if (!forceLoad) {
      React.useEffect(() => {
        if (isIntersecting) {
          unobserve();
        }
      }, [isIntersecting]);
    }
    return (
      <div ref={setTarget}>
        {(forceLoad || isIntersecting) && (
          <img
            alt={alt}
            onLoad={() => !forceLoad && setLoading(false)}
            sizes={sizes}
            src={src}
            srcSet={srcSet}
          />
        )}
        {loading && <Shimmer />}
        <style jsx>{`
          div {
            position: relative;
          }

          img {
            object-fit: cover;
          }
        `}</style>
        <style jsx>{`
          div {
            height: ${height};
            width: ${width};
          }

          img {
            visibility: ${loading ? 'hidden' : 'visible'};
          }
        `}</style>
      </div>
    );
  }
);
