import React from 'react';

import Image from ':components/Image';
import borderRadius from ':theme/borderRadius';
import spacing from ':theme/spacing';
import unit from ':theme/unit';

import Header, { height as headerHeight } from './Header';

export default () => (
  <div className="container">
    <Header />
    <div className="grid">
      {[...Array(20)].map(() => (
        <div className="cell">
          <div className="poster">
            <Image />
          </div>
        </div>
      ))}
    </div>
    <style jsx>{`
      .cell {
        padding-bottom: ${(4 / 3) * 100}%;
        position: relative;
        width: 100%;
      }

      .container {
        min-height: 100vh;
        min-width: 100vw;
        padding: ${headerHeight + unit * 2}px ${spacing.large} ${spacing.large};
      }

      .grid {
        display: grid;
        grid-gap: ${spacing.large};
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
      }

      .poster {
        border-radius: ${borderRadius.medium};
        bottom: 0;
        left: 0;
        overflow: hidden;
        position: absolute;
        right: 0;
        top: 0;
      }
    `}</style>
  </div>
);
