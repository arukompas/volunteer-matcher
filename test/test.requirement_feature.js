var chai = require('chai'), assert = chai.assert, expect = chai.expect, should = chai.should();
var Browser = require('zombie');
var browser = new Browser({ site: 'http://localhost:3000' });

describe('somethin', function(){

  it("is true", function(done) {
    done();
  })

});
