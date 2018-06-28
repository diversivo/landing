const path = require('path');

const webConfig = {
  mode: 'development',
  target: 'web',
  context: path.resolve('.'),
  watch: true,
  entry: {
    index: './client/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, '/client/dist'),
    publicPath: "/client/public",
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '/client/index.js'),
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env']
        }
      },
      {
        test: /\.html$/,
        use: {
          loader: 'html-loader'
        }
      },
      {
        test: /\.scss$/,
        use: [{
          loader: 'style-loader'
        }, {
          loader: 'css-loader'
        }, {
          loader: 'sass-loader'
        }]
      }
    ]
  },
  serve: {
    logTime: true,
    hot: {
      logTime: true,
    },
    port: 3030,
    content: './client/public',
  },
}

module.exports = webConfig