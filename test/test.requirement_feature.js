var http = require('http');
var Browser = require('zombie');
var mongoose = require('mongoose');
var app = require('../app.js');
mongoose.connection.close();
var browser = new Browser({ site: 'http://localhost:3000' });
// var server = http.createServer(app).listen(3000);
//
//
//
// after(function(done) {
//   console.log("in the after block");
//   mongoose.connection.close();
//   server.close(done);
// });
