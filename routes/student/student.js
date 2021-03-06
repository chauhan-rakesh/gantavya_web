var express = require('express');
var router = express.Router();
var Student = require('../../models/student');
//var coordinator_controller = require('../controllers/coordinator/coordController');


/* GET home page. */
router.get('/', function(req, res, next) {

  Student.find({}).then(student =>{
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
    college: req.body.college,
    ContactNo:req.body.ContactNo,
    Roll_no: req.body.Roll_no,

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
  Student.findOne({_id: req.params.id}).then(student=>{
    res.render('student/edit',{student: student} );
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
  res.redirect('/admin/student');

        });
});
});

router.delete('/:id',( req, res)=>{

Student.remove({_id: req.params.id})
.then(result=>{

        res.redirect('/admin/student');

      });
});

module.exports = router;
