const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

// Middleware to restrict access to organisers
function isAuthenticated(req, res, next) {
  if (req.session.user) {
    const role = req.session.user.role;
    if ((typeof role === 'object' && role.organiser) || role === 'organiser') {
      return next();
    }
  }
  res.redirect('/auth/login');
}


// Display new course form (organisers only)
router.get('/new', isAuthenticated, (req, res) => {
  res.render('newCourse', { user: req.session.user });
});

// Process new course submission
router.post('/new', isAuthenticated, courseController.addCourse);

// Display edit form for a course (organisers only)
router.get('/edit/:id', isAuthenticated, courseController.editCourseForm);
router.post('/edit/:id', isAuthenticated, courseController.updateCourse);

// Delete a course (organisers only)
router.post('/delete/:id', isAuthenticated, courseController.deleteCourse);

// Public course details page
router.get('/:id', courseController.courseDetails);

module.exports = router;
