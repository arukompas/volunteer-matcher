var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var RequirementSchema = new Schema({
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

module.exports = mongoose.model('Requirement', RequirementSchema);
