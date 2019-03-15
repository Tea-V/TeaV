import React from 'react';

import PageContainer from ':components/PageContainer';
import color from ':theme/color';
import throttle from ':utils/throttle';
import useEventListener from ':hooks/useEventListener';

import SearchInput from './SearchInput';

export default React.memo(() => {
  const [isDetached, setIsDetached] = React.useState(false);
  useEventListener(
    'scroll',
    throttle(() => setIsDetached(window.pageYOffset > 0), 200)
  );
  return (
    <header>
      <PageContainer>
        <div className="container">
          <SearchInput />
        </div>
      </PageContainer>
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
      `}</style>
    </header>
  );
});
