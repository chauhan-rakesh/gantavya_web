var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var CoordinatorSchema = new Schema(
  {
    name: {type: String, required: true, max: 100,min: 3},
    branch: {type: String, required: true},
    year: {type: Number, required: true, max: 4},
    
    collegeId: {type: String, required: true, max: 10},
    mobileNumber: {type: Number, required: true },
    email: {type: String, required: true, max: 100},
    password: {type: String, required: true, max: 18,min: 6},



  }
);
module.exports = mongoose.model('Coordinator', CoordinatorSchema);
