var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

        res.render('CoordinatorDashboard/Dashboard/dashboard');

});
router.get('/view', function(req, res, next) {

        res.render('CoordinatorDashboard/coordinator/view');

});



module.exports = router;
