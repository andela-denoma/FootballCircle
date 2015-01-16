var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserDetailSchema = new Schema({
      username: String,
      password: String
    });
module.exports = mongoose.model('UserDetail', UserDetailSchema);
