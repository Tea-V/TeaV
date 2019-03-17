import React from 'react';

import PageContainer from ':components/PageContainer';
import color from ':theme/color';
import useIntersectionObserver from ':hooks/useIntersectionObserver';

import SearchInput from './SearchInput';

export default React.memo(() => {
  const { isIntersecting, setTarget } = useIntersectionObserver();
  return (
    <>
      <header>
        <PageContainer>
          <div className="container">
            <SearchInput />
          </div>
        </PageContainer>
      </header>
      <div className="threshold" ref={setTarget} />
      <style jsx>{`
        header {
          background-color: ${color.granite};
          height: 80px;
          position: sticky;
          top: 0;
          z-index: 1;
        }

        .container {
          display: flex;
        }

        .threshold {
          position: absolute;
          top: 0;
        }
      `}</style>
    </>
  );
});
