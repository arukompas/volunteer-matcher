var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var RequirementSchema = new Schema({
  _id: Number,
  _project_id: Number,
  title: String,
  description: String,
  isActive: Boolean,
  capacity: Number,
  duration: {
    from: Date,
    to: Date
  }
});

autoIncrement.initialize(mongoose.connection);
RequirementSchema.plugin(autoIncrement.plugin, 'Requirement');
module.exports = mongoose.model('Requirement', RequirementSchema);
