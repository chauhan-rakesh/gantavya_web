var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StudentSchema = new Schema(
  {
    studentName: {type: String, required: true},
    branch: {type: String, required: true},
    year: {type: String, required: true},

    college: {type: String, required: true},
    ContactNo: {type: String, required: true},
    Roll_no: {type: String , required: true},
  
    email: {type: String , required: true},
    password: {type: String},


  }
);
module.exports = mongoose.model('Student', StudentSchema);
