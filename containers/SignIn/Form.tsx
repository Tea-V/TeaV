import React from 'react';

import borderRadius from ':theme/borderRadius';
import breakpoint from ':theme/breakpoint';
import color from ':theme/color';
import spacing from ':theme/spacing';

type FormProps = {
  children: React.ReactNode;
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
};

export default React.memo<FormProps>(({ children, onSubmit }) => (
  <form onSubmit={onSubmit}>
    {children}
    <style jsx>{`
      form {
        background-color: ${color.night};
        display: flex;
        flex-direction: column;
        height: 100%;
        justify-content: center;
        padding: ${spacing.xLarge};
        width: 100%;
      }

      @media ${breakpoint.smallAndAbove} {
        form {
          border-radius: ${borderRadius.large};
          height: auto;
          min-width: 375px;
          width: auto;
        }
      }
    `}</style>
  </form>
));
