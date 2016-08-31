before(function() {
  chai = require('chai'), assert = chai.assert, expect = chai.expect;
  mongoose = require('mongoose');
  Requirement = require("../models/requirement.js");
  db = null;
});

// var chai = require('chai'), assert = chai.assert, expect = chai.expect, should = chai.should();
// var mongoose = require('mongoose');
// var Requirement = require("../models/requirement.js");
// var db;
