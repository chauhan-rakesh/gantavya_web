var express = require('express');
var router = express.Router();
var Student = require('../../models/student');
//var coordinator_controller = require('../controllers/coordinator/coordController');


/* GET home page. */
router.get('/', function(req, res, next) {

  Student.find({}).then(event =>{
    res.render('admin/student',{student : student} );
  });
});


router.get('/add', function(req, res, next) {
  res.render('student/add');
});

router.post('/add', function(req, res, next) {

  var newStudent =new Student({
    studentName: req.body.studentName,
    branch:req.body.branch,
    year:req.body.year,
    gender:req.body.gender,
    college: req.body.college,
    ContactNo:req.body.ContactNo,
    Roll_no: req.body.Roll_no,
    Address: req.body.Address,
    email: req.body.email,
    password: req.body.password

  });

  newStudent.save().then(savedEvent =>{
    res.redirect('/admin/student');
  }).catch(error =>{
    console.log('could not save data'+ error);
  });
// console.log(req.body);
});
//

router.get('/edit/:id', function(req, res, next) {
  Student.findOne({_id: req.params.id}).then(event =>{
    res.render('student/edit',{student: student} );
  });

});

module.exports = router;
