var chai = require('chai'), assert = chai.assert, expect = chai.expect, should = chai.should();
var Browser = require('zombie');
Browser.localhost('example.com', 3000);
var should = require('should');
var Offer = require('../../../models/offer');
var Requirement = require('../../../models/requirement');

describe('Creating an offer', function() {
  this.timeout(5000);
  var browser = new Browser();
  var requirement;

  before(function(done){
    Requirement.create({
      _projectId: 0,
      title: 'English teacher',
      description: 'A fluent english teacher needed for a couple of weeks',
      capacity: 2,
      startingDate: '10/12/12',
      endDate:      '24/12/12'
    }, function(err, data){
      requirement = data;
      done();
    });
  });

  describe('Not signed in users', function(){
    before(function(done){
      browser.visit('requirements/' + requirement._id + '/offers/new', done);
    });

    it('should not allow to make an offer when not logged in', function(){
      browser.assert.text('h1.projects', 'Listed Projects');
    });
  });

  describe('Signed in user', function() {
    before(function(done){
      registerUser(function() {
        browser.visit('/requirements/' + requirement._id + '/offers/new', done);
      });
    });

    it('should display the page', function() {
      browser.assert.success();
    });

    it('should save the offer and display it', function(done){
      browser
        .fill('message', 'I\'m the man for the job!')
        .pressButton('Send the offer').then(function(){
          browser.assert.text('.message', 'I\'m the man for the job!');
          done();
        });
    });
  });

  function registerUser(done) {
    browser.visit('/register', function(){
      browser
        .fill('username', 'arukomp')
        .fill('password', 'password')
        .pressButton('Submit', done);
    });
  }

  after(function(done){
    Requirement.remove({}, function(){
      Offer.remove({}, done);
    })
  });

});
