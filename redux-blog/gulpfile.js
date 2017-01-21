/**
 * Created by xuanjiu on 17/1/19.
 */
var gulp = require('gulp');
var webpack = require('webpack');
var webpackDevServer = require('webpack-dev-server');
var config = require("./webpack.config.js");

gulp.task('default', function() {
  // 将你的默认的任务代码放在这
  console.log('hello gulp!');

  config.entry.app.unshift("webpack-dev-server/client?http://localhost:8080/", "webpack/hot/dev-server");
  var compiler = webpack(config);
  var server = new webpackDevServer(compiler, {
    hot: true,
    publicPath: "/assets/"
    ,
    headers: { "X-Custom-Header": "yes" },
    stats: { colors: true }
  });
  server.listen(8080);
});
