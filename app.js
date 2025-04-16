const express = require('express');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
const bodyParser = require('body-parser');

const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');
const courseRoutes = require('./routes/courses');

const app = express();
const PORT = process.env.PORT || 9000;

// Set up Mustache Express as the view engine
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');

// Configure middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure session (for production, place your secret in an environment variable)
app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false
}));

// Serve static files (CSS, client-side JS, etc.)
app.use(express.static(__dirname + '/public'));

// Define routes
app.use('/', indexRoutes);
app.use('/auth', authRoutes);
app.use('/courses', courseRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  console.error("Global error handler:", err.stack);
  res.status(500).render('error', { error: 'Something went wrong!' });
});


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
