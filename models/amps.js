var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AmpsSchema = new Schema(
  {
    category_type: {type: String, required: true, maxLength: 30},
  }
);

// Virtual for guitar's URL
AmpsSchema
.virtual('url')
.get(function () {
  return '/catalog/amps/' + this._id;
});

//Export model
module.exports = mongoose.model('Amps', AmpsSchema);
