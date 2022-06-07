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
  res.render('signup', { title: "Signup new user" }); 
});

//Add new sweet
router.post('//', function (req, res, next) {
  console.log('Username:' + req.body.username);
  console.log('Password:' + req.body.password);
  
  var addNewUser = new Promise((resolve, reject) => {
    resolve(
      bcrypt.hash(req.body.password, 10).then(newhash => {
        rdb.save('test', 'appusers', { "id": newhash, "username": req.body.username }).then(
          function (info) {
            if (!info) {
              var notAddedError = new Error('user info not added');
              notAddedError.status = 404;
              return next(notAddedError);
            }
            console.log(info);
            return info;
          });
      }));
  });
  addNewUser.then(function () {
    res.redirect('/login');
    // res.render('login', { title: "Login ", headerMessage: req.body.username + " , you have been successfully registered. Please log in" });
  });
});

module.exports = router;