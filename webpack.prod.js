const merge = require('webpack-merge');
const webConfig = require('./webpack.config.babel.js');
module.exports = merge(webConfig, {
  mode: 'production',
});