var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  debug: true,
  devtool: 'cheap-module-source-map',
  context: path.join(__dirname, 'src'),

  entry: [
    './main'
  ],

  output: {
    path: path.join(__dirname, 'build'),
    publicPath: '/js/',
    filename: 'bundle.js'
  },

  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: false,
      compress: {
        warnings: false
      },
      output: {
        comments: false
      }
    }),
    new webpack.NoErrorsPlugin(),
    new CopyWebpackPlugin([
      {from: 'index.html'},
      {from: 'css/main.css', to: 'css'},
      {from: 'assets/fonts', to: 'assets/fonts'}
    ]),
    new ExtractTextPlugin('main.css', {
      allChunks: true
    })
  ],

  module: {
    loaders: [
      { test: /\.jsx?$/, exclude: /node_modules/, loaders: ['react-hot', 'babel'] },
      { test: /\.json$/, loader: 'json' },
      { test: /\.scss$/, loader: ExtractTextPlugin.extract('style-loader', 'css-loader!sass-loader') },
      { test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/, loader: 'url-loader?limit=100000' }
    ]
  }
};
