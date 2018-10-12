var express = require('express');
var router = express.Router();
var Student = require('../../../models/student');
var Event = require('../../../models/event');
var enrollEvent = require('../../../models/enrollstudents');
//var coordinator_controller = require('../controllers/coordinator/coordController');


/* GET home page. */
router.get('/', function(req, res, next) {

  Student.find({}).then(student =>{
    res.render('CoordinatorDashboard/student/view',{student : student} );
  });
});



router.get('/add', function(req, res, next) {
  res.render('CoordinatorDashboard/student/add');
});

router.post('/add', function(req, res, next) {

  var newStudent =new Student({
    studentName: req.body.studentName,
    branch:req.body.branch,
    year:req.body.year,
    college: req.body.college,
    ContactNo:req.body.ContactNo,
    Roll_no: req.body.Roll_no,
    email: req.body.email,
    password: req.body.password

  });

  newStudent.save().then(savedEvent =>{
    res.redirect('/CoordinatorDashboard/student/view');
  }).catch(error =>{
    console.log('could not save data'+ error);
  });
// console.log(req.body);
});
//

router.get('/edit/:id', function(req, res, next) {
  Student.findOne({_id: req.params.id}).then(student=>{
    res.render('/CoordinatorDashboard/student/edit',{student: student} );
  });

});


router.put('/edit/:id', (req,res)=>{
  Student.findOne({_id: req.params.id}).then(student =>{

    student.studentName =  req.body.studentName;
    student.branch = req.body.branch;
    student.year = req.body.year;

    student.college =  req.body.college;
    student.ContactNo = req.body.ContactNo;
    student.Roll_no =  req.body.Roll_no;
    student.email = req.body.email;
    student.password = req.body.password;

        student.save(updatedStudent =>{
  res.redirect('/CoordinatorDashboard/student/view');

        });
});
});

router.delete('/:id',( req, res)=>{

Student.remove({_id: req.params.id})
.then(result=>{

        res.redirect('CoordinatorDashboard/student/view');

      });
});


router.get('/addEvent', function(req, res, next) {

  Event.find({}).then(event =>{
    res.render('CoordinatorDashboard/student/addEvent',{event : event} );
  });
});

router.post('/addEvent', function(req, res, next) {

  if(Student.findOne({Roll_no:req.params.studentName})){
    var newEnrollEvent =new enrollEvent ({
      name: req.body.studentName,
      collegeId:req.body.collegeId,
      event: req.body.event

    });

    newEnrollEvent.save(newEnrollEvent =>{
  res.redirect('CoordinatorDashboard/student/view');

    });
  }


  });

module.exports = router;
