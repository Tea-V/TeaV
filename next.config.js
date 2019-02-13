/* eslint-disable @typescript-eslint/no-var-requires */

const withTypescript = require('@zeit/next-typescript');
const { withGraphQLConfig } = require('next-graphql-react/server');

if (process.env.NODE_ENV === 'development') {
  module.exports = {
    ...withGraphQLConfig(),
    ...withTypescript(),
  };
} else {
  module.exports = {
    ...withGraphQLConfig(),
    target: 'serverless',
  };
}
