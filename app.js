var express = require('express');
var app = express();
var forum = require('./routes/forum');
var topic = require('./routes/topic');
var comment = require('./routes/comment');

var port = process.env.PORT || 3000;

app.use('/forums', forum);
app.use('/forums/:forums_id/topics', topic);
app.use('/forums/:forums_id/topics/:topics_id/comments', comment);

 app.listen(port); //function(){
  // console.log('server started');
// });