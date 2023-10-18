const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController.js');
const cookieParser = require('cookie-parser');
// postController.getPosts
// Create Post
router.post('/', cookieParser(), postController.createPost, postController.getPosts, (req, res) => {
  //   res.json(res.locals.postBody);
  console.log(res.locals.feed)
  res.status(201).json(res.locals.feed)
});

// Feed
router.get('/', postController.getPosts, (req, res) =>
  res.status(200).json(res.locals.feed),
);

// Get User Posts, maybe

// Get Post by Technology, if frontend prefers it this way

// Delete Post
router.delete('/', (req, res) => res.status(201));

// Edit Post, might not be necessary

module.exports = router;
