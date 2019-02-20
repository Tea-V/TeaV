import React from 'react';

import borderRadius from ':theme/borderRadius';
import color from ':theme/color';
import spacing from ':theme/spacing';

type ButtonProps = {
  disabled?: boolean;
  label: string;
  name?: string;
  type?: string;
};

export default React.memo<ButtonProps>(({ disabled, label, name, type }) => (
  <>
    <button disabled={disabled} name={name} type={type}>
      {label}
    </button>
    <style jsx>{`
      button {
        appearance: none;
        background-color: ${color.cherry};
        border-radius: ${borderRadius.medium};
        border: 0;
        color: ${color.white};
        cursor: pointer;
        display: block;
        outline: none;
        padding: ${spacing.medium};
        width: 100%;
      }
    `}</style>
  </>
));
