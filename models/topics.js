var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TopicSchema = new  Schema({
  headline: {
    type: String,
    required: 'Please enter Topic name',
    trim: true
  },
  body: {
    type: String,
    required: 'Please enter Topic body',
    trim: true
  },
  comments: [{
    type: Schema.Types.ObjectId,
    ref:'Comment'
  }]
});

module.exports = mongoose.model('Topic', TopicSchema);
