var connect = require('connect');
var http = require('http');
var webpack = require('webpack');
var config = require('./development.config');

var compiler = webpack(config);

var app = connect();

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
  watchOptions: config.watchOptions // {poll:true}
}));

app.use(require('webpack-hot-middleware')(compiler));

http.createServer(app).listen(3500);
