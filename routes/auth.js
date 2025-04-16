const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Login form
router.get('/login', (req, res) => {
  res.render('login');
});

// Process login
router.post('/login', authController.login);

// Logout route
router.get('/logout', authController.logout);

// Registration form
router.get('/register', (req, res) => {
  res.render('register');
});

// Process registration
router.post('/register', authController.register);

module.exports = router;
