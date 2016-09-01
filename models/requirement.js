var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RequirementSchema = new Schema({
  projectId: Number,
  title: String,
  description: String,
  isActive: Boolean,
  capacity: Number,
  // duration: {
  //   from: Date,
  //   to: Date
  // }
  startingDate: String,
  endDate:      String
});

module.exports = mongoose.model('Requirement', RequirementSchema);
