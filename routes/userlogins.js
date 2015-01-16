
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var UserDetail = require('../models/userlogin');

var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

router.post('/login',
  passport.authenticate('local', {
    successRedirect: '/loginSuccess',
    failureRedirect: '/loginFailure'
  })
);
 
router.get('/loginFailure', function(req, res, next) {
  res.send('Failed to authenticate');
});
 
router.get('/loginSuccess', function(req, res, next) {
  res.send('Successfully authenticated');
});

passport.serializeUser(function(user, done) {
  done(null, user);
});
 
passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new LocalStrategy(function(username, password, done) {
  process.nextTick(function() {
    // Auth Check Logic
  });
}));

passport.use(new LocalStrategy(function(username, password, done) {
  process.nextTick(function() {
    UserDetail.findOne({
      'username': username, 
    }, function(err, user) {
      if (err) {
        return done(err);
      }
 
      if (!user) {
        return done(null, false);
      }
 
      if (user.password != password) {
        return done(null, false);
      }
 
      return done(null, user);
    });
  });
}));

module.exports = router;