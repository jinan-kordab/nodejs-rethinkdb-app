var express = require('express');
var router = express.Router();
var rdb = require('../lib/rethink');
var hsh = require('../lib/auth');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy
var bcrypt = require('bcryptjs');
// /* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', { title: "Login page" }); 
});

router.get('/home', function(req, res, next) {
  res.render('index', { title: "Login page" }); 
});

//authenticate a user
router.post('/', passport.authenticate('local', {
  successRedirect: "/home",
  failureRedirect: "/login",
}));

module.exports = router;