var express = require('express');
var router = express.Router();

// router.all('/*', (req,res,next)=>{
//
// req.app.locals.layout = 'admin';
// next();
//
// });
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
