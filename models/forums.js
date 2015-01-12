var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/Football');

// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function (callback) {
//   console.log('...connected')
// });

var Schema = mongoose.Schema;

var ForumSchema = new Schema({
  name: {
    type: String,
    default: '',
    required: 'Please fill Forum name',
    trim: true
  },
  slogan:{
    type: String,
    trim: true
  },
  created: {
    type: Date,
    default: Date.now
  },
  topic: [{
    type: Schema.ObjectId,
    ref:'Topic'
  }]
  
});

module.exports = mongoose.model('Forum', ForumSchema);
