var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var Forum = require('../models/forums');

router.route('/forums')
  .get(function(req, res){
    Forum.find(function(err, forums){
      if(err){
        res.send(err);
      }
      res.json(forums);
    });
  })

  .post(function(req, res){
    var forum = new Forum (req.body);
    forum.save(function(err){
      if(err){
        res.send(err);
      }
      res.json(forum);
    });
  });

router.route('/forums/:id')
  .put(function(req, res){
    Forum.findOne({_id: req.params.id}, function(err, forum){
      if(err){
        res.send(err);
      }
      for (prop in req.body) {
      forum[prop] = req.body[prop];
      }
      forum.save(function(err) {
        if (err) {
          return res.send(err);
        }
      res.json({ message: 'Forum updated!' });
      });
    });
  })

  .get(function(req, res){
    Forum.findOne({ _id: req.params.id}, function(err, forum) {
      if (err) {
        return res.send(err);
      }

      res.json(forum);
    });
  })
   
  .delete(function(req, res){
    Forum.findOne({_id: req.params.id}, function(err, forum){
      forum.remove(function(err){
        if(err){
          res.send(err);
        }
        res.json('Document Deleted')
      });
    });
  });

module.exports = router;