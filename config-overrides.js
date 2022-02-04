import { override, addWebpackAlias } from 'customize-cra';

const path = require('path');

module.exports = override(addWebpackAlias({
  '@': path.resolve(__dirname, './src'),
  '@const': path.resolve(__dirname, './src/utils/const'),
  '@helpers': path.resolve(__dirname, './src/utils/helpers'),
}));
