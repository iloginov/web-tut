'use strict';

var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  name: 'client',
  target: 'web',
  entry: [
    './src/client/main.tsx'
  ],
  output: {
    filename: 'client.js',
    path: path.resolve('public/assets')
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.tsx', '.js']
  },
  plugins: [
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ]
};
