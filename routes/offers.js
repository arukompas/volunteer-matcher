var express = require('express');
var Offer = require('../models/offer');
var Requirement = require('../models/requirement');
var router = express.Router();


router.get('/requirements/:requirementId/offers/new', function(req, res) {
  if (!req.user) {
    res.redirect('/projects');
  } else {
    Requirement.findOne({ _id: req.params.requirementId }, function(err, requirement) {
      if (err) {
        res.send(err);
      } else {
        res.render('offers/new', { requirement: requirement });
      }
    });
  }
});

router.post('/requirements/:requirementId/offers', function(req, res) {
  if (!req.user) {
    res.redirect('/projects');
  } else {
    var offer = new Offer({
      _requirement: req.params.requirementId,
      _volunteer: req.user._id,
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

router.get('/requirements/:requirementId/offers', function(req, res) {
  Offer.find({ _requirement: req.params.requirementId }, function(err, offers) {
    if (err) {
      res.send(err);
    } else {
      res.render('offers/index', { offers: offers });
    }
  });
});


module.exports = router;
