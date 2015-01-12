var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var Comment = require('../models/comments');

router.route('/')
  .post(function(req, res){
    console.log(req.body);
    var comment = new Comment ({
      message: req.body.message
    });
    comment.save(function(err){
      if(err){
        res.send(err);
      }
      res.json(comment);
    });
  })

  .get(function(req, res){
    Comment.find(function(err, all_comment){
      if(err){
        res.send(err);
      }
      res.json(all_comment);
    });
  });

  router.route('/:comments_id')

    .get(function(req, res){
      Comment.findById(req.params.comments_id, function(err, single_comment){
        if(err){
          res.send(err);
        }
        res.json(single_comment);
      });
    })

    .put(function(req, res){
      Comment.findById(req.params.comments_id, function(err, single_comment){
        single_comment.message = req.body.message;
      single_comment.save(function(err){
        if(err){
          res.send(err);
        }
        res.json(single_comment);
      });
      });
    })
    
    .delete(function(req, res){
      Comment.findById(req.params.comments_id, function(err, single_comment){
        single_comment.remove(function(err){
          if(err){
            res.send(err);
          }
          res.json('Comment Deleted')
        });
      });
    });

    module.exports = router;