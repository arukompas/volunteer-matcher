var chai = require('chai'), assert = chai.assert, expect = chai.expect, should = chai.should();
var Browser = require('zombie');
var browser = new Browser({ site: 'http://localhost:3000' });
var should = require("should");
var Project = require("../../../models/project.js");


describe('Create a project', function() {

  this.timeout(5000);

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

  afterEach(function(done) {
    Project.remove({}, function() {
      done();
    });
  });
  
});
