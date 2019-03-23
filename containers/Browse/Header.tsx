import React from 'react';

import PageContainer from ':components/PageContainer';
import color from ':theme/color';
import useIntersectionObserver from ':hooks/useIntersectionObserver';

import SearchInput from './SearchInput';

type HeaderProps = {
  onSearchInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function Header({ onSearchInputChange }: HeaderProps) {
  const { targetRef } = useIntersectionObserver<HTMLDivElement>();
  return (
    <>
      <header>
        <PageContainer>
          <div className="container">
            <SearchInput onChange={onSearchInputChange} />
          </div>
        </PageContainer>
      </header>
      <div className="threshold" ref={targetRef} />
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
}

export default React.memo(Header);
