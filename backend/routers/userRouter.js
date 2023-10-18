const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
// const cookieParser = require('cookie-parser');

// // Create User aka signup
router.post('/signup', userController.signup, (req, res) => {
  res.status(201).send('successfully created user');
});

// // Login
router.post('/login', userController.login, (req, res) => {
  res.status(200).send('successfully logged in');
});

router.get('/logout', (req, res) => {
  res.status.send('Logged Out');
});

// Get Post by Technology, if frontend prefers it this way

// Delete Post

// Edit Post, might not be necessary

module.exports = router;
