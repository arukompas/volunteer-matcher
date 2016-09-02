var chai = require('chai'), assert = chai.assert, expect = chai.expect, should = chai.should();
var Browser = require('zombie');
var browser = new Browser({ site: 'http://localhost:3000' });
var Project = require("../../../models/project.js");
var Account = require("../../../models/account.js");


describe('A user can view a single project',function() {
  this.timeout(10000);

  before(function(done) {
    var user = new Account({ username: 'Sarah',
                             password: '123'});
    user.save(function(err, user) {
      var project = new Project({ title: 'Building a school',
                                  description: 'a new school',
                                  startingDate: new Date("October 13, 2014 11:13:00"),
                                  endDate: new Date("October 13, 2014 11:13:00"),
                                  owner_id: user._id});

      project.save(function(err, project) {
        browser.visit('/projects/'+project._id, done);
      });
    });
  });

  it('should be successful', function() {
    browser.assert.success();
  });

  it('should see the project info', function() {
    browser.assert.text('h2#title', 'Building a school');
    browser.assert.text('p#description', 'a new school');
    browser.assert.text('p#startingDate', 'Starting on '+new Date("October 13, 2014 11:13:00"));
    browser.assert.text('p#endDate', 'Ending on '+new Date("October 13, 2014 11:13:00"));
  });
});
