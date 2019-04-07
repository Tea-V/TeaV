import React from 'react';

type ErrorBoundaryProps = {
  children: React.ReactNode;
  fallback: React.ReactNode;
};

type ErrorBoundaryState = Readonly<{
  hasError: boolean;
}>;

const defaultProps = {
  fallback: null,
};

export default class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  public static defaultProps = defaultProps;

  public static getDerivedStateFromError() {
    return { hasError: true };
  }

  public state = {
    hasError: false,
  };

  public componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (process.env.NODE_ENV !== 'production') {
      // eslint-disable-next-line no-console
      console.error(error, errorInfo);
    }
  }

  public render() {
    const { children, fallback } = this.props;
    const { hasError } = this.state;
    return hasError ? fallback : children;
  }
}
