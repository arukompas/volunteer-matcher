var chai = require('chai'), assert = chai.assert, expect = chai.expect, should = chai.should();
var http = require('http');
var Browser = require('zombie');
Browser.localhost('example.com', 3000);
var app = require('../../../app.js');
var mongoose = require('mongoose');
// var browser = new Browser({ site: 'http://localhost:3000' });
var server = http.createServer(app).listen(3000);

describe('Create a project', function() {
  this.timeout(5000);
  var browser = new Browser();
  before(function(done) {

    browser.visit('/projects/new', done);

  });

  describe('Signed-in users', function(){
    before(function(done) {
      browser
        .fill('title',       'Building a school')
        .fill('description', 'a new school')
        .fill('startingDate', '21-10-2016')
        .fill('endDate',     '21-10-2017')
        .pressButton('Add Project', done);
    });

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should see the project title', function() {
      browser.assert.text('li', 'Building a school');
    });
  });

  // describe('Not signed-in users', function(){
  //
  // });

  after(function() {
    mongoose.connection.close();
    server.close();

  });
});
