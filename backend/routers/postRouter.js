const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController.js');

// Create Post
router.post('/', postController.createPost, (req, res) => {
  //   res.json(res.locals.postBody);
  res.status(200);
});

// Feed
router.get('/', postController.getPosts, (req, res) =>
  res.status(200).json([...res.locals.feed]),
);

// Get User Posts, maybe

// Get Post by Technology, if frontend prefers it this way

// Delete Post
router.delete('/', (req, res) => res.status(200));

// Edit Post, might not be necessary

module.exports = router;
