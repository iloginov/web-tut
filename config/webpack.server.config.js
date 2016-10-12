'use strict';

var webpack = require('webpack');
var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  name: 'server',
  target: 'node',
  externals: [
          /^[a-z\-0-9]+$/,
          { "react-dom/server": true }
  ],
  entry: [
    './src/server/main.tsx'
  ],
  output: {
    filename: 'server.js',
    path: path.resolve('dist'),
    libraryTarget: "commonjs2"
  },
  module: {
    loaders: [
      { test: /\.tsx?$/, loader: 'ts-loader' },
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },
  resolve: {
    extensions: ['', '.ts', '.tsx']
  },
  plugins: [
    new WebpackNotifierPlugin({ alwaysNotify: true }),
  ]
};
