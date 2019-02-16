import NextApp, { Container } from 'next/app';
import { GraphQLContext } from 'graphql-react';
import { withGraphQLApp } from 'next-graphql-react';

type Props = {
  graphql: unknown;
};

class App extends NextApp<Props> {
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
