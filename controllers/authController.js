const userModel = require('../models/userModel');
const bcrypt = require('bcryptjs'); // Import bcrypt for password hashing

/**
 * Handles user login by comparing the provided credentials with stored data.
 * On successful login, sets up the user session.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.login = (req, res) => {
  try {
    const { username, password } = req.body;
    // Find the user by username
    userModel.findUser(username, (err, user) => {
      if (err || !user) {
        console.error("Error retrieving user for login:", err);
        return res.render('login', { error: "Invalid username or password" });
      }
      // Compare the provided password with the stored hashed password
      bcrypt.compare(password, user.hashedPassword, (err, result) => {
        if (err) {
          console.error("Error comparing passwords:", err);
          return res.render('login', { error: "An error occurred during login." });
        }
        if (result) {
          // Successful login: store user data in session
          req.session.user = user;
          return res.redirect('/');
        } else {
          // Password does not match
          return res.render('login', { error: "Invalid username or password" });
        }
      });
    });
  } catch (error) {
    console.error("Unexpected error in login:", error);
    return res.status(500).render('error', { error: 'Unexpected error occurred during login.' });
  }
};

/**
 * Logs out the current user by destroying the session.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.logout = (req, res) => {
  try {
    // Destroy the session to log out the user
    req.session.destroy((err) => {
      if (err) {
        console.error("Error during logout:", err);
        return res.status(500).render('error', { error: "An error occurred during logout." });
      }
      res.redirect('/');
    });
  } catch (error) {
    console.error("Unexpected error in logout:", error);
    return res.status(500).render('error', { error: "Unexpected error occurred during logout." });
  }
};

/**
 * Registers a new user by hashing their password and storing their credentials.
 * On success, logs the user in and redirects to the home page.
 * @param {Object} req - The HTTP request object.
 * @param {Object} res - The HTTP response object.
 */
exports.register = (req, res) => {
  try {
    const { username, password } = req.body;
    // Hash the password with a salt factor of 10
    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) {
        console.error("Error hashing password during registration:", err);
        return res.render('error', { error: "An error occurred during registration." });
      }
      // Build the new user object. By default, users are regular users.
      let newUser = {
        username,
        hashedPassword,
        role: 'user'  // Initially, the role is a string. For organiser accounts, this should be updated.
      };
      // Insert the new user into the database
      userModel.addUser(newUser, (err, user) => {
        if (err) {
          console.error("Error registering new user:", err);
          return res.render('error', { error: "An error occurred while registering the account." });
        }
        // Successful registration - log the user in and redirect to home.
        req.session.user = user;
        res.redirect('/');
      });
    });
  } catch (error) {
    console.error("Unexpected error in registration:", error);
    return res.status(500).render('error', { error: "Unexpected error occurred during registration." });
  }
};
