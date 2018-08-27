const merge = require('webpack-merge');
const webConfig = require('./webpack.config.babel.js');
module.exports = merge(webConfig, {
  mode: 'development',
  serve: {
    logTime: true,
    hot: {
      logTime: true,
    },
    port: 3030,
    content: './client/public',
  },
  watch: true,
});