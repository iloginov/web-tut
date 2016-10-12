'use strict';

var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  name: 'client',
  target: 'web',
  entry: [
    'react-hot-loader/patch',
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/client/main.tsx'
  ],
  output: {
    filename: 'client.js',
    path: path.resolve('public/assets'),
    publicPath: 'http://localhost:3000/assets/'
  },
  module: {
    loaders: [
      {
          test: /\.tsx?$/,
          loaders: ['react-hot-loader/webpack', 'ts-loader']
      }
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new WebpackNotifierPlugin({ alwaysNotify: true })
  ]
};
