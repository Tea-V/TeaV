import 'cross-fetch/polyfill';
import NextApp, { Container } from 'next/app';
import { Provider } from 'graphql-react';
import { withGraphQL } from 'next-graphql-react';

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

export default withGraphQL(App);
