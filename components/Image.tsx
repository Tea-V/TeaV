import React from 'react';

import Shimmer from ':components/Shimmer';
import useIntersectionObserver from ':hooks/useIntersectionObserver';

type ImageProps = {
  alt?: string;
  forceLoad?: boolean;
  height?: string;
  sizes?: string;
  src?: string;
  srcSet?: string;
  width?: string;
};

function Image({
  alt,
  forceLoad = false,
  height = '100%',
  sizes,
  src,
  srcSet,
  width = '100%',
}: ImageProps) {
  const [loading, setLoading] = React.useState(!forceLoad);
  const { isIntersecting, setTarget, unobserve } = useIntersectionObserver();
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
          decoding="async"
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
          height: 100%;
          object-fit: cover;
          position: absolute;
          width: 100%;
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

export default React.memo(Image);
