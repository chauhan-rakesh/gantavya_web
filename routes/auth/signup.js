var express = require('express');
var router = express.Router();
var errors;
const { body,validationResult } = require('express-validator/check');
const { sanitizeBody } = require('express-validator/filter');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('users/signUp');
});
/* GET home page. */
router.post('/', function(req, res, next) {
  var name = req.body.name;
  var email = req.body.email;
  var colllege_id = req.body.colllege_id;
  var password = req.body.password;
  var password2 = req.body.password2;
req.checkBody('name','Name field is required').notEmpty();
req.checkBody('email','email field is required').notEmpty();
req.checkBody('email','Email is not valid').isEmail();
req.checkBody('colllege_id','Colllege id field is required').notEmpty();
req.checkBody('password','Password field is required').notEmpty();
req.checkBody('password2','Password do not match').equals(req.body.password);;
console.log(req.body.name);
errors = req.validationErrors();

if(errors){
  console.log(errors);
  res.render('users/signup',{
    errors: errors

  });
}else{
  console.log('No Errors');
}

});

module.exports = router;
