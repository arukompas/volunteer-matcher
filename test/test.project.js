var chai = require('chai'), assert = chai.assert, expect = chai.expect, should = chai.should();
var Project = require("../models/project.js");
var Account = require("../models/account.js");

describe('Project', function() {

  beforeEach(function(done) {
    var account = new Account({
      username: 'Noby',
      password: 'testy'
    });

    account.save(function(error) {
      if (error) console.log('error' + error.message);
      else console.log('no error');


      console.log("account id: ", account._id);
      var project = new Project({
        title: "Build a school in a village",
        description: "Please, this is a description",
        startingDate: Date.now(),
        endDate:      Date.now(),
        complete:    false,
        owner_id: account._id
      });

      project.save(function(error) {
          if (error) console.log(error);
          else console.log('no error');
          done();
      });
    });




  });



  it('find a project by title', function(done) {
    Project.findOne({ title: 'Build a school in a village' }, function(err, data) {
      data.title.should.eql('Build a school in a village');
      done();
    });
  });

  afterEach(function(done) {
    Project.remove({}, function() {
        done();
    });
  });


});
