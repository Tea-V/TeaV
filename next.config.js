/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */

const dotenv = require('dotenv').config();
const withTypescript = require('@zeit/next-typescript');
const { withGraphQLConfig } = require('next-graphql-react/server');

const {
  AWS_REGION,
  DOMAIN,
  GRAPHQL_URL,
  NODE_ENV,
  USER_POOL_APP_CLIENT_ID,
  USER_POOL_ID,
} = process.env;

if (dotenv.error) {
  throw dotenv.error;
}

const sharedConfig = {
  ...withGraphQLConfig(),
  ...withTypescript(),
  env: {
    AWS_REGION,
    DOMAIN,
    GRAPHQL_URL,
    USER_POOL_APP_CLIENT_ID,
    USER_POOL_ID,
  },
};

if (NODE_ENV === 'production') {
  module.exports = {
    ...sharedConfig,
    target: 'serverless',
  };
} else {
  module.exports = {
    ...sharedConfig,
  };
}
