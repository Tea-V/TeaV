import React from 'react';

export default React.memo(() => (
  <div aria-busy="true">
    <style jsx>{`
      div {
        animation: shimmer 1s ease-in-out 0s infinite alternate forwards;
        background-color: currentColor;
        height: 100%;
        position: relative;
        width: 100%;
      }

      @keyframes shimmer {
        from {
          opacity: 0.1;
        }

        to {
          opacity: 0.3;
        }
      }
    `}</style>
  </div>
));
