const Datastore = require('nedb');
const path = require('path');

// Point to the users database file
const userDB = new Datastore({ filename: path.join(__dirname, 'data/users.db'), autoload: true });

const usernameToUpdate = 'Organiser';

// Update the user so that the role property becomes an object with organiser:true
userDB.update(
  { username: usernameToUpdate },
  { $set: { role: { organiser: true } } },
  {},
  (err, numReplaced) => {
    if (err) {
      console.error('Error updating user role:', err);
    } else {
      console.log(`Updated ${numReplaced} document(s) with organiser role structure.`);
    }
  }
);
