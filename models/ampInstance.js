var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AmpInstanceSchema = new Schema(
  {
    amp: { type: Schema.Types.ObjectId, ref: 'Amp', required: true }, //reference to the associated amp
    imprint: {type: String, required: true},
    status: {type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance'},
    due_back: {type: Date, default: Date.now}
  }
);

// Virtual for ampinstance's URL
AmpInstanceSchema
.virtual('url')
.get(function () {
  return '/catalog/ampInstance/' + this._id;
});

//Export model
module.exports = mongoose.model('AmpInstance', AmpInstanceSchema);
