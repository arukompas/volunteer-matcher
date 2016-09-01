var express = require('express');
var Offer = require('../models/offer');
var router = express.Router();

router.get('/offers/new', function(req, res) {
  if (!req.user) {
    res.redirect('/projects');
  } else {
    res.sendStatus(200);
  }
});


module.exports = router;
