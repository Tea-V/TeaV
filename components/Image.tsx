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
  const { isIntersecting, targetRef, unobserve } = useIntersectionObserver<
    HTMLDivElement
  >();
  const onLoad = React.useCallback(() => !forceLoad && setLoading(false), [
    forceLoad,
  ]);
  React.useEffect(() => {
    if (isIntersecting) {
      unobserve();
    }
  }, [isIntersecting, unobserve]);
  return (
    <div ref={targetRef}>
      {(forceLoad || isIntersecting) && (
        <img
          alt={alt}
          className={!loading ? 'img_loaded' : undefined}
          decoding="async"
          onLoad={onLoad}
          sizes={sizes}
          src={src}
          srcSet={srcSet}
        />
      )}
      {loading && <Shimmer />}
      <style jsx>
        {`
          div {
            position: relative;
          }

          img {
            height: 100%;
            object-fit: cover;
            opacity: 0;
            position: absolute;
            transition: opacity 300ms ease-in;
            width: 100%;
          }

          .img_loaded {
            opacity: 1;
          }
        `}
      </style>
      <style jsx>
        {`
          div {
            height: ${height};
            width: ${width};
          }
        `}
      </style>
    </div>
  );
}

export default React.memo(Image);
