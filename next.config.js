/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */

const dotenv = require('dotenv').config();
const withTypescript = require('@zeit/next-typescript');
const { withGraphQLConfig } = require('next-graphql-react/server');

if (dotenv.error) {
  throw dotenv.error;
}

const sharedConfig = {
  ...withGraphQLConfig(),
  ...withTypescript(),
  env: {
    GRAPHQL_URL: process.env.GRAPHQL_URL,
  },
};

if (process.env.NODE_ENV === 'production') {
  module.exports = {
    ...sharedConfig,
    target: 'serverless',
  };
} else {
  module.exports = {
    ...sharedConfig,
  };
}
