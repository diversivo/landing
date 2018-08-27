const path = require('path');

const webConfig = {
  target: 'web',
  context: path.resolve('.'),
  entry: {
    index: './client/src/index.js'
  },
  output: {
    path: path.resolve(__dirname, './client/build'),
    publicPath:'/client/public',
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
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 50000,
            name: "./font/[name].[ext]",
          }
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
  }
}

module.exports = webConfig