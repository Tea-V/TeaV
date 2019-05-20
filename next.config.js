/* eslint-disable @typescript-eslint/no-var-requires, import/no-extraneous-dependencies */

require('dotenv').config();

const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');
const { withGraphQLConfig } = require('next-graphql-react/server');

const { NODE_ENV } = process.env;

const isProduction = NODE_ENV === 'production';

const nextConfig = {
  webpack(config) {
    config.plugins.push(
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
      }),
      new webpack.IgnorePlugin(/^encoding$/, /node-fetch/)
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
