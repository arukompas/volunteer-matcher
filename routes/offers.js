var express = require('express');
var Offer = require('../models/offer');
var Requirement = require('../models/requirement');
var router = express.Router();


router.get('/offers/new', function(req, res) {
  if (!req.user) {
    res.redirect('/projects');
  } else {
    Requirement.find({ _id: req.params.requirementId }, function(err, requirement) {
      if (err) {
        console.log(err.errors);
        res.send(err);
      } else {
        console.log('Requirement: ', requirement);
        res.render('offers/new', { requirement: requirement });
      }
    });
  }
});

router.post('/offers', function(req, res) {
  if (!req.user) {
    res.redirect('/projects');
  } else {
    var offer = new Offer({
      message: req.body.message
    });
    offer.save(function(err) {
      if (err) {
        res.send(err);
      } else {
        res.redirect('offers');
      }
    })
  }
});


module.exports = router;
