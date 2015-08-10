var http = require('http')
  , path = require('path')
  ;

var static = require('node-static')
  , file = new static.Server(path.resolve(__dirname, 'public/'))
  , server
  ;

server = http.createServer(function (req, res) {
  req.addListener('end', function () {
    file.serve(req, res);
  }).resume();
});

module.exports.start = function (port, callback) {
  port = port || 8080;
  server.listen(port, function () {
    callback && callback();
  });
};

module.exports.stop = function () {
  server.close();
}
