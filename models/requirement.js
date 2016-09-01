var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var RequirementSchema = new Schema({
  _id: Number,
  _projectId: Number,
  title: String,
  description: String,
  isActive: { type: Boolean, default: true },
  capacity: Number,
  startingDate: String,
  endDate:      String
});

autoIncrement.initialize(mongoose.connection);
RequirementSchema.plugin(autoIncrement.plugin, 'Requirement');
module.exports = mongoose.model('Requirement', RequirementSchema);
