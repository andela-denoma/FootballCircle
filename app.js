var express = require('express');
var app = express();
var forum = require('./routes/forum');
var topic = require('./routes/topic');
var comment = require('./routes/comment');


app.use('/forums', forum);
app.use('/forums/:forums_id/topics', topic);
app.use('/forums/:forums_id/topics/:topics_id/comments', comment);

 app.listen(3000); //function(){
  // console.log('server started');
// });