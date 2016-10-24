'use strict';

const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: './app/app.js',
  output: { path: './public', filename: 'bundle.js' },
  resolve: {
    root: __dirname,
    alias: {
      About: 'app/components/About.js',
      Examples: 'app/components/Examples.js',
      LinkContainer: 'app/components/LinkContainer.js',
      Main: 'app/components/Main.js',
      Nav: 'app/components/Nav.js',
      weatherMap: 'app/api/weatherMap.js',
      Weather: 'app/components/Weather.js',
      WeatherForm: 'app/components/WeatherForm.js',
      WeatherInfo: 'app/components/WeatherInfo.js',
    },
    extentions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
};
