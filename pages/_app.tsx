import NextApp, { Container, NextAppContext } from 'next/app';
import { GraphQLContext } from 'graphql-react';
import { NextContext } from 'next';
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
  static async getInitialProps(
    context: AppProps & NextAppContext & NextContext
  ) {
    const { Component, graphql } = context;
    const token = await getToken();
    const pageProps = { token };
    if (Component.getInitialProps) {
      Object.assign(pageProps, await Component.getInitialProps(context));
    }
    return { graphql, pageProps };
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
