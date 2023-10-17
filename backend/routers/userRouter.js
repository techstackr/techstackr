const express = require('express');
const router = express.Router();

// Create User aka signup
router.post('/signup', (req, res) => res.status(200));

// Login
router.post('/login', (req, res) => res.status(200));

// Get User Posts

// Get Post by Technology, if frontend prefers it this way

// Delete Post

// Edit Post, might not be necessary

module.exports = router;
