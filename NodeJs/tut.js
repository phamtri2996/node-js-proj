var http = require('http');
var demo = require('./module_test');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World! ' + demo.demo());
}).listen(8080);