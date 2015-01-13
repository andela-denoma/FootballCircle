var express = require('express');
var app = express();
var forum = require('./routes/forum');
var topic = require('./routes/topic');
var comment = require('./routes/comment');

var port = process.env.PORT || 3000;

app.use('/forums', forum);
app.use('/forums/:forums_id/topics', topic);
app.use('/forums/:forums_id/topics/:topics_id/comments', comment);

var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  };

  app.use(allowCrossDomain);

 app.listen(port, function(){
  console.log('server started');
});