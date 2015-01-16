var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost/Football');


var TopicSchema = new  Schema({
  headline: {
    type: String,
    required: 'Please enter Topic name',
    trim: true
  },
  body: {
    type: String,
    trim: true
  }
  forum: { type: Schema.Types.ObjectId, ref: 'Forum' }
});

module.exports = mongoose.model('Topic', TopicSchema);
