const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController.js');
// const cookieParser = require('cookie-parser');

// // Create User aka signup
router.post('/signup', userController.signup, userController.signin, userController.setIDCookie, (req, res) => {
  res.status(201).redirect('/');
});

// // Login
router.post('/signin', userController.signin, userController.setIDCookie, userController.createSession, userController.startSession, (req, res) => {
  console.log('successful signin')
  // res.status(200).send('successfully logged in');
  res.status(201).redirect('/')
});

router.get('/logout', (req, res) => {
  res.redirect('/signin')
});

router.get('/', userController.isLoggedIn, (req, res) => {
  res.status(200).redirect('/')
})

// Get Post by Technology, if frontend prefers it this way

// Delete Post

// Edit Post, might not be necessary

module.exports = router;
