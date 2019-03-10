import NextApp, { Container, NextAppContext } from 'next/app';
import { GraphQLContext } from 'graphql-react';
import { withGraphQLApp } from 'next-graphql-react';

import { getToken } from ':utils/authentication';

if (!process.browser) {
  // @ts-ignore Property 'fetch' does not exist on type 'Global'.
  global.fetch = global.fetch || require('node-fetch');
}

type AppProps = {
  graphql: unknown;
};

class App extends NextApp<AppProps> {
  static async getInitialProps({
    Component,
    graphql,
    pageProps,
  }: AppProps & NextAppContext & { pageProps: any }) {
    const token = await getToken();
    return {
      Component,
      graphql,
      pageProps: { ...pageProps, token },
    };
  }

  render() {
    const { Component, graphql, pageProps } = this.props;
    return (
      <Container>
        <GraphQLContext.Provider value={graphql}>
          <Component {...pageProps} />
        </GraphQLContext.Provider>
      </Container>
    );
  }
}

export default withGraphQLApp(App);
