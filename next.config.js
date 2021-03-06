/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */

const Dotenv = require('dotenv-webpack');
const dotenv = require('dotenv').config();
const path = require('path');
const { IgnorePlugin } = require('webpack');
const { withGraphQLConfig } = require('next-graphql-react/server');

if (dotenv.error) {
  throw dotenv.error;
}

const { NODE_ENV } = process.env;

const isProduction = NODE_ENV === 'production';

const nextConfig = {
  webpack(config) {
    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
      new IgnorePlugin(/^encoding$/, /node-fetch/)
    );
    return config;
  },
};

const sharedConfig = {
  ...withGraphQLConfig(nextConfig),
};

if (isProduction) {
  module.exports = {
    ...sharedConfig,
    target: 'serverless',
  };
} else {
  module.exports = {
    ...sharedConfig,
  };
}
