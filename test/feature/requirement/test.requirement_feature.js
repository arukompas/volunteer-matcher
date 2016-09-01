var chai = require('chai'), assert = chai.assert, expect = chai.expect, should = chai.should();
var Browser = require('zombie');
var browser = new Browser({ site: 'http://localhost:3000' });

describe('Create a requirement', function(){

  describe("Not signed-in user/owner", function(done) {
    before(function(done) {
      browser.visit('/requirements/new', done);
    });

    it('should see the requirement list in the particular project page', function() {
      browser.assert.text('h1', 'Listed Projects');
    });
  });

});
