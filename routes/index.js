const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Landing page
// routes/index.js
router.get('/', (req, res) => {
  // Compute isOrganiser flag (assuming the organiser role is stored as an object)
  const isOrganiser = req.session.user && req.session.user.role && req.session.user.role.organiser;
  res.render('index', { user: req.session.user, isOrganiser });
});


// Public courses listing
router.get('/courses', courseController.listCourses);

module.exports = router;
