import React from 'react';

import borderRadius from ':theme/borderRadius';
import breakpoint from ':theme/breakpoint';
import color from ':theme/color';
import spacing from ':theme/spacing';

type FormProps = {
  children: React.ReactNode;
};

export default React.memo<FormProps>(({ children }) => (
  <form>
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
          width: auto;
        }
      }
    `}</style>
  </form>
));
