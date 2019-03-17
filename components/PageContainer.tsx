import React from 'react';

import spacing from ':theme/spacing';

type PageContainerProps = {
  children: React.ReactNode | React.ReactNodeArray;
};

export default function PageContainer({ children }: PageContainerProps) {
  return (
    <div>
      {children}
      <style jsx>{`
        div {
          padding: 0 ${spacing.large};
          width: 100%;
        }
      `}</style>
    </div>
  );
}
