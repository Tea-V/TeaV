/* eslint-disable @typescript-eslint/no-var-requires */

const withTypescript = require('@zeit/next-typescript');
const { withGraphQLConfig } = require('next-graphql-react/server');

module.exports = withGraphQLConfig(withTypescript());
