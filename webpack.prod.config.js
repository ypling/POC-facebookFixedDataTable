/**
 * Created by leonardli on 3/24/17.
 */
const path = require('path');
module.exports = {
  entry: {
    main: [
      './src/index'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './prod-dist')
  },
  module: {
    rules: [
      {test: /\.(js|jsx)$/, loader: "babel-loader"},
      {test: /\.html$/, loader: "file-loader?name=[name].[ext]"}
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};