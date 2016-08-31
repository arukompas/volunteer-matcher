var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Project = new Schema({
  title:        String,
  description:  String,
  startingDate: String,
  endDate:      String
});


module.exports = mongoose.model('Project', Project);
