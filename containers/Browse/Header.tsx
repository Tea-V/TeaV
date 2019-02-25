import React from 'react';

import color from ':theme/color';
import spacing from ':theme/spacing';
import unit from ':theme/unit';

const height = 80;

export default React.memo(() => (
  <header>
    <div className="container" />
    <style jsx>{`
      header {
        height: ${height + unit * 2}px;
        position: sticky;
        top: -${spacing.large};
        z-index: 1;
      }

      header::before {
        box-shadow: 0 4px 6px -2px ${color.night};
        content: '';
        display: block;
        height: ${spacing.large};
        position: sticky;
        top: ${height - unit * 2}px;
      }

      .container {
        background-color: ${color.granite};
        display: flex;
        height: ${height}px;
        position: sticky;
        top: 0;
        transform: translateZ(0);
        z-index: 2;
      }
    `}</style>
  </header>
));
