var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EventSchema = new Schema(
  {
    eventName: {type: String, required: true},
    branchConducting: {type: String, required: true},
    clubOrCell: {type: String, required: true},
    facultyCoordinator: {type: String},
    studentCoordinator: {type: String },
    timeAndDate: {type: String, required: true},
    Eventdetails: {type: String},
    venue: {type: String},
    EventFee: {type: String },
    winAmt: {type: String},

  }
);
module.exports = mongoose.model('Event', EventSchema);
