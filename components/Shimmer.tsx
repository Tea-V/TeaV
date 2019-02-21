import React from 'react';

import color from ':theme/color';

export default React.memo(() => (
  <div>
    <style jsx>{`
      div {
        animation: shimmer 1s ease-in-out 0s infinite alternate forwards;
        background-color: ${color.dorian};
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
