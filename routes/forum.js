var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

var Forum = require('../models/forums');

// router.route('/')
//   .get(function(req, res){
//     res.redirect('/forums');
//   });

router.route('/')
  .post(function(req, res){
    console.log(req.body);
    var forum = new Forum ({
      name: req.body.name,
      slogan: req.body.slogan,
      created: req.body.created
    });
    forum.save(function(err){
      if(err){
        res.send(err);
      }
      res.json(forum);
    });
  })

  .get(function(req, res){
    Forum.find(function(err, all_forum){
      if(err){
        res.send(err);
      }
      res.json(all_forum);
    });
  });

  router.route('/:forums_id')

    .get(function(req, res){
      Forum.findById(req.params.forums_id, function(err, single_forum){
        if(err){
          res.send(err);
        }
        res.json(single_forum);
      });
    })

    .put(function(req, res){
      Forum.findById(req.params.forums_id, function(err, single_forum){
        single_forum.name = req.body.name;
        single_forum.slogan = req.body.slogan;
        single_forum.created = req.body.created;

      single_forum.save(function(err){
        if(err){
          res.send(err);
        }
        res.json(single_forum);
      });
      });
    })

    .delete(function(req, res){
      console.log(req);
      Forum.findById(req.params.forums_id, function(err, single_forum){
        single_forum.remove(function(err){
          if(err){
            res.send(err);
          }
          res.json('Document Deleted')
        });
      });
    });

    module.exports = router;