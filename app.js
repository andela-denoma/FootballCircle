var express = require('express');
var app = express();
var forum = require('./routes/forum');
var topic = require('./routes/topic');
var comment = require('./routes/comment');
var login = require('./routes/userlogins')
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

app.use(passport.initialize());
app.use(passport.session());


var allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
  };

app.set('port', (process.env.PORT || 3000));
app.use(allowCrossDomain);
app.use('/', login)
app.use('/', forum);
app.use('/', topic);
app.use('/forums/:forum_id/topics/:topics_id/comments', comment);

app.listen(app.get('port'), function(){
  console.log('server started');
});