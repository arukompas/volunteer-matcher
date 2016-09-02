var chai = require('chai'), assert = chai.assert, expect = chai.expect, should = chai.should();
var Browser = require('zombie');
var browser = new Browser({ site: 'http://localhost:3000' });
var should = require("should");
var Project = require("../../../models/project.js");


describe('Create a project', function() {

  this.timeout(10000);

  describe('Not signed-in users', function(){
    before(function(done) {
      browser.visit('/projects/new', done);
    });
    it('should see the project list in the projects page', function(){
        browser.assert.text('h1.projects', 'Listed Projects');
    });
  });

  describe('Signed-in users', function(){

    before(function(done) {
      browser.visit('/register', function(){
        browser
            .fill('username', 'Bob')
            .fill('password', 'password')
            .pressButton('Submit', function(){
              browser.visit('/projects/new', function(){
                browser
                  .fill('title',       'Building a school')
                  .fill('description', 'a new school')
                  .fill('startingDate', new Date("October 13, 2014 11:13:00"))
                  .fill('endDate',     new Date("October 13, 2014 11:13:00"))
                  .pressButton('Add Project', done);
              });
            });
      });
    });

    it('should be successful', function() {
      browser.assert.success();
    });

    it('should see the project title, description, and dates', function() {
      browser.assert.text('li', 'Building a school, a new school, from Mon Oct 13 to Mon Oct 13');
    });

    it('should show the project creator', function() {
      browser.assert.text('span.author', 'Project created by, Bob');
    });
  });

  afterEach(function(done) {
    Project.remove({}, function() {
      done();
    });
  });

});
