var express = require('express');
var router = express.Router();
var Event = require('../../../models/event');
//var coordinator_controller = require('../controllers/coordinator/coordController');


/* GET home page. */
router.get('/', function(req, res, next) {

  Event.find({}).then(event =>{
    res.render('CoordinatorDashboard/event/event',{event : event} );
  });
});


router.get('/add', function(req, res, next) {
  res.render('CoordinatorDashboard/event/add');
});

router.post('/add', function(req, res, next) {


  var newEvents =new Event({
    eventName: req.body.eventName,
    branchConducting:req.body.branchConducting,
    clubOrCell:req.body.clubOrCell,
    facultyCoordinator:req.body.facultyCoordinator,
    studentCoordinator:req.body.studentCoordinator,
    timeAndDate:req.body.timeAndDate,
    Eventdetails: req.body.Eventdetails,
    venue: req.body.venue,
    EventFee:req.body.EventFee,
    winAmt: req.body.winAmt

  });

  newEvents.save().then(savedEvent =>{
    res.redirect('/CoordinatorDashboard/event/view');
  }).catch(error =>{
    console.log('could not save data'+ error);
  });
// console.log(req.body);
});
//

router.get('/edit/:id', function(req, res, next) {
  Event.findOne({_id: req.params.id}).then(event =>{
    res.render('CoordinatorDashboard/event/edit',{event: event} );
  });

});


router.put('/edit/:id', (req,res)=>{
  Event.findOne({_id: req.params.id}).then(event =>{

    event.eventName =req.body.eventName;
    event.branchConducting = req.body.branchConducting;
    event.clubOrCell = req.body.clubOrCell;

    event.timeAndDate = req.body.timeAndDate;
    event.Eventdetails = req.body.Eventdetails;
    event.EventFee = req.body.EventFee;
    event.winAmt = req.body.winAmt;

        event.save(updatedEvent =>{
  res.redirect('/CoordinatorDashboard/event/event');

        });
      });
});

router.delete('/:id',( req, res)=>{

Event.remove({_id: req.params.id})
.then(result=>{

        res.redirect('/CoordinatorDashboard/event/event');

      });
});


module.exports = router;
