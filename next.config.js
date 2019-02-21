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
    AWS_REGION: process.env.AWS_REGION,
    DOMAIN: process.env.DOMAIN,
    GRAPHQL_URL: process.env.GRAPHQL_URL,
    USER_POOL_APP_CLIENT_ID: process.env.USER_POOL_APP_CLIENT_ID,
    USER_POOL_ID: process.env.USER_POOL_ID,
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
