var express = require('express');
var router = express.Router();
var Coordinator = require('../../models/coordinator');
var async = require('async');
/* GET home page. */
router.get('/', function(req, res, next) {

  async.parallel({
        coordinator_count: function(callback) {
            Coordinator.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
      },
    }, function(err, results) {
        res.render('admin/adminDashboard', { error: err, data: results });
    });
});

module.exports = router;
