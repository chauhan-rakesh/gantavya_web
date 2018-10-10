var express = require('express');
var router = express.Router();

//var coordinator_controller = require('../controllers/coordinator/coordController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/coordinator', { title:' coordinator'});
});

router.get('/add', function(req, res, next) {
  res.render('coordinator/add', { title:' add coordinator'});
});
//
// router.get('/coordinator/add', coordinator_controller.coordinator_create_get);
//
// // POST request for creating coordinator.
// router.post('/coordinator/add', coordinator_controller.coordinator_create_post);
//
// // GET request to delete coordinator.
// router.get('/coordinator/:id/delete', coordinator_controller.coordinator_delete_get);
//
// // POST request to delete coordinator.
// router.post('/coordinator/:id/delete', coordinator_controller.coordinator_delete_post);
//
// // GET request to update coordinator.
// router.get('/coordinator/:id/update', coordinator_controller.coordinator_update_get);
//
// // POST request to update coordinator.
// router.post('/coordinator/:id/update', coordinator_controller.coordinator_update_post);
//
// // GET request for one coordinator.
// router.get('/coordinator/:id', coordinator_controller.coordinator_detail);
//
// // GET request for list of all coordinators.
// router.get('/coordinators', coordinator_controller.coordinator_list);


module.exports = router;
