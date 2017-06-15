var path = require('path');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'trump.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: 'babel-loader'
            }
        }
    ]
  },
  plugins: [
    new UglifyJSPlugin()
  ]
};