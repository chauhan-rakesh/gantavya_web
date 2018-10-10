var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/login', function(req, res, next) {
  res.render('users/signIn', {  });
});
router.get('/register', function(req, res, next) {
  res.render('users/signUp', {  });
});

module.exports = router;
