const Datastore = require('nedb');
const db = new Datastore({ filename: './data/users.db', autoload: true });

// Find a user by username
exports.findUser = (username, callback) => {
  db.findOne({ username }, callback);
};

// Add a new user
exports.addUser = (userData, callback) => {
  db.insert(userData, callback);
};
