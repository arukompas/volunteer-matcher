var express = require('express');
var passport = require('passport');
var Account = require('../models/account');
var Project = require('../models/project');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { user : req.user, title : "Titus..." });
});

router.get('/register', function(req, res) {
    if (req.user) res.redirect('/');
    res.render('register', { });
});

router.post('/register', function(req, res, next) {
    Account.register(new Account({ username : req.body.username }), req.body.password, function(err, account) {
        if (err) {
          return res.render('register', { error : err.message });
        }

        passport.authenticate('local')(req, res, function () {
            req.session.save(function (err) {
                if (err) {
                    return next(err);
                }
                res.redirect('/');
            });
        });
    });
});

router.get('/login', function(req, res) {
    res.render('login', { user : req.user });
});

router.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
});

router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/ping', function(req, res){
    res.status(200).send("pong!");
});


router.get('/projects/new', function (req, res) {
  if (!req.user) {
    res.redirect('/projects');
  } else {
    res.render('projects/new', {  });
  }
});

router.post('/projects', function(req, res) {
  var project = new Project({ title : req.body.title, description: req.body.description, startingDate: req.body.startingDate, endDate: req.body.endDate });
  project.save(function(err, project) {
    if(err){
      res.send('Error saving project')
    } else {
      res.redirect('/projects');
    }
  });
});

router.get('/projects', function(req, res) {
  Project.find({}, function(err, projects) {
    res.render('projects/projects', {projects: projects});
  });
});

router.get('/requirements/new', function(req, res) {
  if (!req.user) {
    res.redirect('/projects');
  } else {

  }
})



module.exports = router;
