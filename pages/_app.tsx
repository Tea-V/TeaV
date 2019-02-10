import 'cross-fetch/polyfill';
import NextApp, { Container } from 'next/app';
import { Provider } from 'graphql-react';
import { withGraphQLApp } from 'next-graphql-react';

type Props = {
  graphql: unknown;
};

class App extends NextApp<Props> {
  render() {
    const { Component, graphql, pageProps } = this.props;
    return (
      <Container>
        <Provider value={graphql}>
          <Component {...pageProps} />
        </Provider>
      </Container>
    );
  }
}

export default withGraphQLApp(App);
