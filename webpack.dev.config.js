/**
 * Created by leonardli on 3/24/17.
 */
const path = require('path');
module.exports = {
  entry: {
    main: [
      'react-hot-loader/patch',
      './src/index'
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, './dist')
  },
  devtool: "source-map",
  module: {
    rules: [
      {test: /\.(js|jsx)$/, loader: "babel-loader"},
      {test: /\.(html|css)$/, loader: "file-loader?name=[name].[ext]"}
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};