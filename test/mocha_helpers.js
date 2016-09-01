var http = require('http');
var app;
var mongoose = require('mongoose');
var server;

before(function(done){
  app = require('../app.js');
  server = http.createServer(app).listen(3000);
  done();
});

after(function(done){
  mongoose.connection.close();
  server.close(done);
});

