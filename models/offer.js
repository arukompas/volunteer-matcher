var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OfferSchema = new Schema({
  _requirement: { type: Number, ref: 'Requirement' },
  _volunteer: { type: Schema.Types.ObjectId, ref: 'Account' },
  message: String
});

module.exports = mongoose.model('Offer', OfferSchema);
