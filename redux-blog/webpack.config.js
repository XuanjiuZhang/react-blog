/**
 * Created by jiaojiaodebook on 17/1/18.
 */
var path = require('path');

module.exports = {
  entry: {
    app: ['./src/app.js']
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'app.bundle.js',
    publicPath: '/build/',
  },
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loader: 'babel'},
      {test: /\.css$/, loader: "style!css?sourceMap!postcss"},
      {test: /\.less$/, loader: "style!css!less|postcss"},
      {test: /\.scss$/, loader: "style!css!sass|postcss"}],
  },
};