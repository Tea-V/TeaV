import React from 'react';

import InputOnly, { InputOnlyProps } from ':components/Input/InputOnly';
import borderRadius from ':theme/borderRadius';
import color from ':theme/color';

export default React.memo<InputOnlyProps>((props) => (
  <div>
    <InputOnly {...props} />
    <style jsx>{`
      div {
        background-color: ${color.slate};
        border-radius: ${borderRadius.medium};
      }
    `}</style>
  </div>
));
