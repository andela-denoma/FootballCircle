var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var Comment = require('../models/comments');

router.route('/forums/:id/topics/:id/comments')
  .get(function(req, res){
    Comment.find(function(err, comments){
      if(err){
        res.send(err);
      }
        res.json(comments);
    });
  })

  .post(function(req, res){
    var comment = new Comment (req.body);
    comment.save(function(err){
      if(err){
        res.send(err);
      }
        res.json(comment);
    });
  });
 
router.route('/forums/:id/topics/:id/comments/:id')
  .put(function(req, res){
    Comment.findOne({_id: req.params.id}, function(err, comment){
      if(err){
        res.send(err);
      }
      for (prop in req.body) {
      comment[prop] = req.body[prop];
      }
      comment.save(function(err) {
        if (err) {
          return res.send(err);
        }
          res.json({ message: 'Comment updated!' });
      });
    });
  })

  .get(function(req, res){
    Comment.findOne({ _id: req.params.id}, function(err, comment) {
      if (err) {
        return res.send(err);
      }
        res.json(comment);
    });
  })


  .delete(function(req, res){
    Comment.findOne({_id: req.params.id}, function(err, comment){
      comment.remove(function(err){
        if(err){
          res.send(err);
        }
          res.json('Document Deleted')
      });
    });
  });

module.exports = router;