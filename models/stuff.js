var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var StuffSchema = new Schema(
  {
    category_type: {type: String, required: true, maxLength: 30},
  }
);

// Virtual for guitar's URL
StuffSchema
.virtual('url')
.get(function () {
  return '/catalog/stuff/' + this._id;
});

//Export model
module.exports = mongoose.model('Stuff', StuffSchema);
