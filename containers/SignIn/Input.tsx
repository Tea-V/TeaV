import React from 'react';

import InputOnly, { InputOnlyProps } from ':components/Input/InputOnly';
import borderRadius from ':theme/borderRadius';
import color from ':theme/color';

function Input(props: InputOnlyProps) {
  return (
    <div>
      <InputOnly {...props} />
      <style jsx>
        {`
          div {
            background-color: ${color.slate};
            border-radius: ${borderRadius.medium};
          }

          div:hover {
            filter: brightness(1.1);
          }
        `}
      </style>
    </div>
  );
}

export default React.memo(Input);
