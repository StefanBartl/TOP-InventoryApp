var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GuitarsSchema = new Schema(
  {
    category_type: {type: String, required: true, maxLength: 30},
  }
);

// Virtual for guitar's URL
GuitarsSchema
.virtual('url')
.get(function () {
  return '/catalog/guitars/' + this._id;
});

//Export model
module.exports = mongoose.model('Guitars', GuitarsSchema);
