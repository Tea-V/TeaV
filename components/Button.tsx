import React from 'react';

import borderRadius from ':theme/borderRadius';
import color from ':theme/color';
import font, { weight } from ':theme/font';
import spacing from ':theme/spacing';

type ButtonProps = {
  disabled?: boolean;
  label: string;
  name?: string;
  type?: 'button' | 'reset' | 'submit';
};

function Button({ disabled, label, name, type }: ButtonProps) {
  return (
    <>
      <button disabled={disabled} name={name} type={type}>
        {label}
      </button>
      <style jsx>
        {`
          button {
            ${font.medium}
            appearance: none;
            background-color: ${color.cherry};
            border-radius: ${borderRadius.medium};
            border: 0;
            color: ${color.white};
            cursor: pointer;
            display: block;
            font-weight: ${weight.bolder};
            outline: none;
            padding: ${spacing.large};
            width: 100%;
          }

          button:hover {
            filter: brightness(1.1);
          }
        `}
      </style>
    </>
  );
}

export default React.memo(Button);
