var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var RequirementSchema = new Schema({
  _id: Number,
  projectId: Number,
  title: String,
  description: String,
  isActive: Boolean,
  capacity: Number,
  startingDate: String,
  endDate:      String
});

autoIncrement.initialize(mongoose.connection);
RequirementSchema.plugin(autoIncrement.plugin, 'Requirement');
module.exports = mongoose.model('Requirement', RequirementSchema);
