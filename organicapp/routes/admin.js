var express = require('express');
var router = express.Router();
var rdb = require('../lib/rethink');


checkAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) { return next() }
  res.redirect("/login")
}
// /* GET users listing. */
router.get('/',checkAuthenticated, function(req, res, next) {
  res.render('admin', { title: "this is data" }); 
});


module.exports = router;