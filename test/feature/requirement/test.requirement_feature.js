var chai = require('chai'), assert = chai.assert, expect = chai.expect, should = chai.should();
var Browser = require('zombie');
var browser = new Browser({ site: 'http://localhost:3000' });

describe('Create a requirement', function(){

  this.timeout(10000);

  describe("Not signed-in user/owner", function(done) {
    before(function(done) {
      browser.visit('/projects/1/requirements/new', done);
    });

    it('should see the requirement list in the particular project page', function() {
      browser.assert.text('h1', 'Listed Projects');
    });
  });

  describe('Signed-in users/owner', function() {
    before(function(done) {
      browser.visit('/register', function() {
        browser
          .fill('username', 'Titus')
          .fill('password', 'password')
          .pressButton('Submit', function() {
            browser.visit('/projects/1/requirements/new', function() {
              browser
                .fill('title', 'Teachers Needed')
                .fill('description', "Teachers are needed")
                .fill('capacity', 5)
                .fill('startingDate', '21-10-2016')
                .fill('endDate', '21-10-2017')
                .pressButton('Add Requirement', done);
            });
          });
      });
    });

    it('should be successful', function(){
      browser.assert.success();
    });

  });

});
