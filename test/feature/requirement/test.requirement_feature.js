var chai = require('chai'), assert = chai.assert, expect = chai.expect, should = chai.should();
var Browser = require('zombie');
var browser = new Browser({ site: 'http://localhost:3000' });
var Requirement = require('../../../models/requirement');
var Project = require('../../../models/project');

describe('Create a requirement', function(){

  this.timeout(10000);
  var project;

  before(function(done){
    Project.create({
      title:        'Project Title',
      description:  'Project description',
      startingDate: new Date(),
      endDate:      new Date(),
      owner_id: '57c93bec43c50fec2a8b29be',
      requirements: []
    }, function(err, data) {
      project = data;
      done();
    });
  });

  describe("Not signed-in user/owner", function(done) {
    before(function(done) {
      browser.visit('/projects/' + project._id + '/requirements/new', done);
    });

    it('should see the requirement list in the particular project page', function() {
      browser.assert.text('h1.projects', 'Listed Projects');
    });
  });

  describe('Signed-in users/owner', function() {

    before(function(done) {
      browser.visit('/register', function() {
        browser
          .fill('username', 'Titus')
          .fill('password', 'password')
          .pressButton('Submit', function() {
          done();
          });
      });
    });

    beforeEach(function(done) {
      browser.visit('/projects/' + project._id + '/requirements/new', function() {
        browser
          .fill('title', 'Teachers Needed')
          .fill('description', "Teachers are needed")
          .fill('capacity', 5)
          .fill('startingDate', '21-10-2016')
          .fill('endDate', '21-10-2017')
          .pressButton('Add Requirement', done);
      });
    });

    it('should be successful', function(){
      browser.assert.success();
    });

    it('displays the requirement on the page', function() {
      browser.assert.text('.title', 'Teachers Needed');
      browser.assert.text('.description', 'Teachers are needed');
      browser.assert.text('.capacity', 'Quantity needed: 5');
      browser.assert.text('.startingDate', 'Starting on 21-10-2016');
      browser.assert.text('.endDate', 'Ending on 21-10-2017');
    });

    it('deletes an existing requirement', function(done) {
      browser.fire('.delete', 'click', function() {
        browser.assert.success();
        expect(browser.text('.title')).not.to.equal('Teachers Needed');
        done();
      });
    });

  // before(function(done){
    it('edits an existing requirement', function(done) {
      browser.fire('.edit', 'click', function() {
        browser.assert.success();
        expect(browser.text('h1')).to.equal('Edit requirement');
        browser
          .fill('description', "More teachers needed")
          .pressButton('Confirm changes', function(){
            expect(browser.text('p.description')).to.equal('More teachers needed');
            done();
          });
      });
    });
  });

  afterEach(function(done){
    Requirement.remove({}, function(){
      done();
    });
  });

});
