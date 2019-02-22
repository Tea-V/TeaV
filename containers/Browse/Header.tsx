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
        backface-visibility: hidden;
        height: ${height + unit * 2}px;
        position: sticky;
        top: -${spacing.large};
        z-index: 1;
      }

      header::after,
      header::before {
        content: '';
        display: block;
        height: ${spacing.large};
        position: sticky;
      }

      header::before {
        box-shadow: 0 2px 6px 0 ${color.night};
        top: ${height - unit * 2}px;
      }

      .container {
        background-color: ${color.granite};
        display: flex;
        height: ${height}px;
        position: sticky;
        top: 0;
        z-index: 3;
      }
    `}</style>
  </header>
));
