import React from 'react';

import color from ':theme/color';

export const height = 80;

export default React.memo(() => (
  <div>
    <style jsx>{`
      div {
        background-color: ${color.granite};
        box-shadow: 0 10px 6px -6px ${color.night};
        display: flex;
        height: ${height}px;
        left: 0;
        position: fixed;
        right: 0;
        top: 0;
        z-index: 1;
      }
    `}</style>
  </div>
));
