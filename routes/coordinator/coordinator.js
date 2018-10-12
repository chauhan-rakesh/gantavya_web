var express = require('express');
var router = express.Router();
var Coordinator = require('../../models/coordinator');
//var coordinator_controller = require('../controllers/coordinator/coordController');


/* GET home page. */
router.get('/', function(req, res, next) {

  Coordinator.find({}).then(coordinator =>{
    res.render('admin/coordinator',{coordinator: coordinator} );
  });



});

router.get('/add', function(req, res, next) {
  res.render('coordinator/add', { title:' add coordinator'});
});

router.post('/add', function(req, res, next) {
  


  var newCoordinator =new Coordinator({
    name: req.body.name,
    branch:req.body.branch,
    year:req.body.year,

    gender:req.body.gender,
    collegeId: req.body.collegeId,
    mobileNumber:req.body.mobileNumber,
    email: req.body.email,
    password: req.body.password
  });

  newCoordinator.save().then(savedCoordinator =>{
    res.redirect('/admin/coordinator');
  }).catch(error =>{
    console.log('could not save data'+ error);
  });
// console.log(req.body);
});
//

router.get('/edit/:id', function(req, res, next) {
  Coordinator.findOne({_id: req.params.id}).then(coordinator =>{
    res.render('coordinator/edit',{coordinator: coordinator} );
  });

});


router.put('/edit/:id', (req,res)=>{
  Coordinator.findOne({_id: req.params.id}).then(coordinator =>{
      coordinator.name =  req.body.name;
      coordinator.branch = req.body.branch;
      coordinator.year=req.body.year;

      coordinator.gender = req.body.gender;
      coordinator.collegeId = req.body.collegeId;
      coordinator.mobileNumber = req.body.mobileNumber;
      coordinator.email = req.body.email;
      coordinator.password =  req.body.password;

        coordinator.save(updatedCoordinator =>{
  res.redirect('/admin/coordinator');

        });
    });
});

router.delete('/:id',( req, res)=>{

Coordinator.remove({_id: req.params.id})
.then(result=>{

        res.redirect('/admin/coordinator');
      });
});




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
