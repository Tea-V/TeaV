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
  static defaultProps = defaultProps;

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  state = {
    hasError: false,
  };

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(error, errorInfo);
    }
  }

  render() {
    const { children, fallback } = this.props;
    const { hasError } = this.state;
    return hasError ? fallback : children;
  }
}
