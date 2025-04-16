const courseModel = require('../models/courseModel');

// Enhanced listCourses with error handling and inline comments
/**
 * Retrieves all courses from the database and renders the courses page.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */

exports.listCourses = (req, res) => {
  try {
    courseModel.getAllCourses((err, courses) => {
      if (err) {
        // Log the error for debugging
        console.error("Error retrieving courses:", err);
        // Render a user-friendly error page
        return res.status(500).render('error', { error: 'An error occurred while retrieving courses.' });
      }
      // Successfully render the courses page with the retrieved data
      res.render('courses', { courses, user: req.session.user });
    });
  } catch (error) {
    // Catch unexpected errors and log them
    console.error("Unexpected error in listCourses:", error);
    res.status(500).render('error', { error: 'Unexpected error occurred.' });
  }
};


/**
 * Retrieves and displays the details for a single course.
 * @param {Object} req - The HTTP request object, with req.params.id specifying the course ID.
 * @param {Object} res - The HTTP response object.
 */
exports.courseDetails = (req, res) => {
  try {
    const courseId = req.params.id;
    courseModel.getCourse(courseId, (err, course) => {
      if (err) {
        // Log error and render error page if there's an error retrieving the course.
        console.error("Error retrieving course details for id", courseId, err);
        return res.status(500).render('error', { error: 'An error occurred while retrieving course details.' });
      }
      if (!course) {
        // Render a 404 error if the course is not found.
        return res.status(404).render('error', { error: 'Course not found.' });
      }
      // Successfully render the course details page.
      res.render('courseDetails', { course, user: req.session.user });
    });
  } catch (error) {
    // Catch any unexpected errors.
    console.error("Unexpected error in courseDetails:", error);
    res.status(500).render('error', { error: 'Unexpected error occurred.' });
  }
};

/**
 * Creates a new course using data from the request body and redirects to the course details page.
 * @param {Object} req - The HTTP request object containing course data.
 * @param {Object} res - The HTTP response object.
 */
exports.addCourse = (req, res) => {
  try {
    const courseData = {
      name: req.body.name,
      duration: req.body.duration,
      description: req.body.description,
      classes: [] // New courses start with an empty list of classes.
    };
    courseModel.addCourse(courseData, (err, newCourse) => {
      if (err) {
        // Log error and render error page if there's an error during course creation.
        console.error("Error adding new course:", err);
        return res.status(500).render('error', { error: 'An error occurred while adding the course.' });
      }
      // Redirect to the details page of the newly added course.
      res.redirect('/courses/' + newCourse._id);
    });
  } catch (error) {
    console.error("Unexpected error in addCourse:", error);
    res.status(500).render('error', { error: 'Unexpected error occurred while adding the course.' });
  }
};


/**
 * Retrieves course data for editing and renders the edit course form.
 * @param {Object} req - The HTTP request object, with req.params.id specifying the course ID.
 * @param {Object} res - The HTTP response object.
 */
exports.editCourseForm = (req, res) => {
  try {
    const courseId = req.params.id;
    courseModel.getCourse(courseId, (err, course) => {
      if (err) {
        // Log error and render error page if there's an error fetching course data.
        console.error("Error fetching course for editing:", err);
        return res.status(500).render('error', { error: 'An error occurred while retrieving the course for editing.' });
      }
      if (!course) {
        // Render a 404 error if no course is found.
        return res.status(404).render('error', { error: 'Course not found.' });
      }
      // Render the edit course page with course data.
      res.render('editCourse', { course, user: req.session.user });
    });
  } catch (error) {
    console.error("Unexpected error in editCourseForm:", error);
    res.status(500).render('error', { error: 'Unexpected error occurred.' });
  }
};


/**
 * Updates an existing course using the provided data and redirects to the updated course's details page.
 * @param {Object} req - The HTTP request object, with req.params.id specifying the course ID and updated data in req.body.
 * @param {Object} res - The HTTP response object.
 */
exports.updateCourse = (req, res) => {
  try {
    const courseId = req.params.id;
    const updatedData = {
      name: req.body.name,
      duration: req.body.duration,
      description: req.body.description
    };
    courseModel.updateCourse(courseId, updatedData, (err) => {
      if (err) {
        // Log error and render error page if there's a problem updating the course.
        console.error("Error updating course:", err);
        return res.status(500).render('error', { error: 'An error occurred while updating the course.' });
      }
      // Redirect to the updated course details page.
      res.redirect('/courses/' + courseId);
    });
  } catch (error) {
    console.error("Unexpected error in updateCourse:", error);
    res.status(500).render('error', { error: 'Unexpected error occurred while updating the course.' });
  }
};


/**
 * Deletes a course and redirects back to the course listings.
 * @param {Object} req - The HTTP request object, with req.params.id specifying the course ID.
 * @param {Object} res - The HTTP response object.
 */
exports.deleteCourse = (req, res) => {
  try {
    const courseId = req.params.id;
    courseModel.deleteCourse(courseId, (err) => {
      if (err) {
        // Log error and render error page if there's a problem deleting the course.
        console.error("Error deleting course:", err);
        return res.status(500).render('error', { error: 'An error occurred while deleting the course.' });
      }
      // Redirect to the courses list after successful deletion.
      res.redirect('/courses');
    });
  } catch (error) {
    console.error("Unexpected error in deleteCourse:", error);
    res.status(500).render('error', { error: 'Unexpected error occurred while deleting the course.' });
  }
};
