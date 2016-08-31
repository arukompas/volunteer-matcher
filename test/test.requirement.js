var chai = require('chai'), assert = chai.assert, expect = chai.expect, should = chai.should();
var mongoose = require('mongoose');
var Requirement = require("../models/requirement.js");
var db;

describe('Requirement', function() {

    before(function(done) {
      db = mongoose.connect('mongodb://localhost/test');
        done();
    });

    after(function(done) {
      mongoose.connection.close();
      done();
    });

    beforeEach(function(done) {
      var requirement = new Requirement({
        _project_id: 1,
        title: 'Some object',
        description: 'Some description',
        isActive: true,
        capacity: 3,
        duration: {from: Date.now(), to: Date.now()}
      });

      requirement.save(function(error) {
          if (error) console.log(error.errors);
          else console.log('no error');
          done();
      });
    });

    it('find a requirement by title', function(done) {
      Requirement.findOne({ title: 'Some object' }, function(err, data) {
        data.title.should.eql('Some object');
        done();
      });
    });

    afterEach(function(done) {
        Requirement.remove({}, function() {
            done();
        });
     });

});
