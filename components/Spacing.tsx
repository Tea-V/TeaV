import React from 'react';

import unit from ':theme/unit';

type SpacingProps = {
  bottom?: number;
  horizontal?: number;
  left?: number;
  right?: number;
  top?: number;
  vertical?: number;
};

function Spacing({
  bottom = 0,
  horizontal = 0,
  left = 0,
  right = 0,
  top = 0,
  vertical = 0,
}: SpacingProps) {
  return (
    <div>
      <style jsx>
        {`
          div {
            margin-bottom: ${unit * (bottom || vertical)}px;
            margin-left: ${unit * (left || horizontal)}px;
            margin-right: ${unit * (right || horizontal)}px;
            margin-top: ${unit * (top || vertical)}px;
          }
        `}
      </style>
    </div>
  );
}

export default React.memo(Spacing);
