import React from 'react';

import Image from ':components/Image';
import borderRadius from ':theme/borderRadius';

export default React.memo(() => (
  <div className="container">
    <div className="image">
      <Image />
    </div>
    <style jsx>{`
      .container {
        padding-bottom: ${(4 / 3) * 100}%;
        position: relative;
        width: 100%;
      }

      .image {
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
));
