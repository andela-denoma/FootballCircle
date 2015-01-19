var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  message:{
    type: String,
    trim: true
  }
});

module.exports = mongoose.model('Comment', CommentSchema);
