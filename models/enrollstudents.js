var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EnrollStudentSchema = new Schema(
  {
    name: {type: String, required: true, max: 100,min: 3},

    collegeId: {type: String},

    event: {type: String},



  }
);
module.exports = mongoose.model('EnrollStudent', EnrollStudentSchema);
