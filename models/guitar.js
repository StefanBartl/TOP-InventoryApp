var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var GuitarSchema = new Schema(
  {
    name: {type: String, required: true, maxLength: 30},
    manufactor: {type: String, required: true, maxLength: 30},
    description: {type: String, required: true, maxLength: 300},
    price: {type: Number, required: true},
    category: [{type: Schema.Types.ObjectId, ref: 'Categories'}],
  }
);

// Virtual for guitar's URL
GuitarSchema
.virtual('url')
.get(function () {
  return '/catalog/guitar/' + this._id;
});

//Export model
module.exports = mongoose.model('Guitar', GuitarSchema);
