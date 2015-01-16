var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var Topic = require('../models/topics');

router.route('/topics')
.get(function(req, res){
    Topic.find(function(err, topics){
      if(err){
        res.send(err);
      }
      res.json(topics);
    });
  })

  .post(function(req, res){
    console.log(req.body);
    var topic = new Topic (req.body);
    topic.save(function(err){
      if(err){
        res.send(err);
      }
      res.json(topic);
    });
  });

  
  router.route('/topics/:id')
   .put(function(req, res){
      Topic.findOne({_id: req.params.id}, function(err, topic){
        if(err){
          res.send(err);
        }
        for (prop in req.body) {
        topic[prop] = req.body[prop];
        }
      topic.save(function(err) {
        if (err) {
          return res.send(err);
        }
      res.json({ message: 'Topic updated!' });
      });
    });
  })

    .get(function(req, res){
     Topic.findOne({ _id: req.params.id}, function(err, topic) {
    if (err) {
      return res.send(err);
    }
 
    res.json(topic);
    });
  })
   

    .delete(function(req, res){
      console.log(req);
      Topic.findOne({_id: req.params.id}, function(err, topic){
        topic.remove(function(err){
          if(err){
            res.send(err);
          }
          res.json('Document Deleted')
        });
      });
    });

    module.exports = router;