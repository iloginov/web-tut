'use strict';

var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  name: 'server',
  target: 'node',
  externals: /^[a-z\-0-9]+$/,
  entry: [
    './src/server/main.ts'
  ],
  output: {
    filename: 'server.js',
    path: path.resolve('dist'),
    libraryTarget: "commonjs2"
  },
  module: {
    loaders: [
      { test: /\.ts?$/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.ts']
  },
  plugins: [
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ]
};
