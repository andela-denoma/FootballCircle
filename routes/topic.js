var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var Topic = require('../models/topics');

router.route('/')
  .post(function(req, res){
    console.log(req.body);
    var topic = new Topic ({
      headline: req.body.headline,
    });
    topic.save(function(err){
      if(err){
        res.send(err);
      }
      res.json(topic);
    });
  })

  .get(function(req, res){
    Topic.find(function(err, all_topic){
      if(err){
        res.send(err);
      }
      res.json(all_topic);
    });
  });

  router.route('/:topics_id')

    .get(function(req, res){
      Topic.findById(req.params.topics_id, function(err, single_topic){
        if(err){
          res.send(err);
        }
        res.json(single_topic);
      });
    })

    .put(function(req, res){
      Topic.findById(req.params.topics_id, function(err, single_topic){
        single_topic.headline = req.body.headline;
      single_topic.save(function(err){
        if(err){
          res.send(err);
        }
        res.json(single_topic);
      });
      });
    })
    
    .delete(function(req, res){
      Topic.findById(req.params.topics_id, function(err, single_topic){
        single_topic.remove(function(err){
          if(err){
            res.send(err);
          }
          res.json('Document Deleted')
        });
      });
    });

    module.exports = router;