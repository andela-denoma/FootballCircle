var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// mongoose.connect('mongodb://localhost/Football');


var CommentSchema = new Schema({
  message:{
    type: String,
    trim: true
  }
  // like: [{
  //   type: String
  // }],
  // dislike: [{
  //   type: String
  // }]
});

module.exports = mongoose.model('Comment', CommentSchema);
