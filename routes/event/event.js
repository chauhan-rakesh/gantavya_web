var express = require('express');
var router = express.Router();
var Event = require('../../models/event');
//var coordinator_controller = require('../controllers/coordinator/coordController');


/* GET home page. */
router.get('/', function(req, res, next) {

  Event.find({}).then(event =>{
    res.render('admin/event',{event : event} );
  });
});


router.get('/add', function(req, res, next) {
  res.render('event/add');
});

router.post('/add', function(req, res, next) {


  var newEvents =new Event({
    eventName: req.body.eventName,
    branchConducting:req.body.branchConducting,
    clubOrCell:req.body.clubOrCell,

    timeAndDate:req.body.timeAndDate,
    Eventdetails: req.body.Eventdetails,
    EventFee:req.body.EventFee,
    winAmt: req.body.winAmt

  });

  newEvents.save().then(savedEvent =>{
    res.redirect('/admin/event');
  }).catch(error =>{
    console.log('could not save data'+ error);
  });
// console.log(req.body);
});
//

router.get('/edit/:id', function(req, res, next) {
  Event.findOne({_id: req.params.id}).then(event =>{
    res.render('event/edit',{event: event} );
  });

});

module.exports = router;
