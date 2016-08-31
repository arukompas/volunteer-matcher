var chai = require('chai'), assert = chai.assert, expect = chai.expect, should = chai.should();
var http = require('http');
var Browser = require('zombie');
var mongoose = require('mongoose');
var app = require('../app.js');
var browser = new Browser({ site: 'http://localhost:3000' });
var server = http.createServer(app).listen(3000);


describe('somethin', function(){

  it("is true", function(done) {
    done();
  })

  after(function(done) {
    mongoose.connection.close();
    server.close(done);
  });

});
