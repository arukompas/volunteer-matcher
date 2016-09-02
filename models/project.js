var mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
var Schema = mongoose.Schema;

var ProjectSchema = new Schema({
  _id: Number,
  title:        String,
  description:  String,
  startingDate: Date,
  endDate:      Date,
  complete:    { type: Boolean, default: false },
  creator:      String,
  owner_id: { type: Schema.Types.ObjectId, ref: 'Account' },
  requirements: [{ type: Number, ref: 'Requirement'}]
});

autoIncrement.initialize(mongoose.connection);
ProjectSchema.plugin(autoIncrement.plugin, 'Project');
module.exports = mongoose.model('Project', ProjectSchema);
