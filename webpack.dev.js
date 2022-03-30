const { merge } = require('webpack-merge'); // eslint-disable-line import/no-extraneous-dependencies
const ErrorOverlayPlugin = require('error-overlay-webpack-plugin'); // eslint-disable-line import/no-extraneous-dependencies
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'cheap-module-source-map',
  plugins: [
    new ErrorOverlayPlugin(),
  ],
  devServer: {
    port: 3000,
    open: true,
    hot: true,
    client: {
      overlay: false,
    },
  },
});
