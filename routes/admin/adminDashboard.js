var express = require('express');
var router = express.Router();
var Coordinator = require('../../models/coordinator');
var Event = require('../../models/event');
var Student = require('../../models/student');

var async = require('async');
/* GET home page. */
router.get('/', function(req, res, next) {


    async.parallel({
        event_count: function(callback) {
          Event.countDocuments({}, callback);
        },
        coordinator_count: function(callback) {
          Coordinator.countDocuments({}, callback);
        },
        student_count: function(callback) {
          Student.countDocuments({}, callback);
        },
      }, function(err, results) {
          res.render('admin/adminDashboard', { error: err, data: results });
      });
});



module.exports = router;
