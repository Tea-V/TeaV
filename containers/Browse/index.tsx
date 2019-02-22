import React from 'react';

import spacing from ':theme/spacing';

import Header from './Header';
import Poster from './Poster';

export default () => (
  <>
    <Header />
    <div className="container">
      <div className="grid">
        {[...Array(20)].map(() => (
          <Poster />
        ))}
      </div>
      <style jsx>{`
        .container {
          min-height: 100vh;
          min-width: 100vw;
          padding: 0 ${spacing.large} ${spacing.large};
        }

        .grid {
          display: grid;
          grid-gap: ${spacing.large};
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
        }
      `}</style>
    </div>
  </>
);
