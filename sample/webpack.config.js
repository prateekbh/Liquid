/* globals require, __dirname, module */
const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const extractCSS = new ExtractTextPlugin('[name].css');

const config = {
  entry: {
    app: './app.js'
  },
  output: {
    path: __dirname + '/public',
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        options: {
          presets: [['es2015', { modules: false }]],
          plugins: [
            ['transform-react-jsx', { pragma: 'h' }],
            'transform-object-rest-spread'
          ]
        }
      },
      {
        test: /\.css$/,
        loader: extractCSS.extract({
          fallbackLoader: 'style-loader',
          loader: ['css-loader']
        })
      }
    ]
  },
  plugins: [extractCSS]
};

module.exports = config;
