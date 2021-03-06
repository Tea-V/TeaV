/* eslint-disable global-require */

import NextApp, { AppContext, Container } from 'next/app';
import React from 'react';
import { GraphQLProvider } from 'graphql-react';
import { NextPageContext } from 'next';
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
  public static async getInitialProps(
    context: AppContext & AppProps & NextPageContext
  ) {
    const { Component, graphql } = context;
    const token = await getToken();
    const pageProps = { token };
    if (Component.getInitialProps) {
      Object.assign(pageProps, await Component.getInitialProps(context));
    }
    return { graphql, pageProps };
  }

  public render() {
    const { Component, graphql, pageProps } = this.props;
    return (
      <Container>
        <GraphQLProvider graphql={graphql}>
          <Component {...pageProps} />
        </GraphQLProvider>
      </Container>
    );
  }
}

export default withGraphQLApp(App);
