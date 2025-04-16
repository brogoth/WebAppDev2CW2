const Datastore = require('nedb');
const db = new Datastore({ filename: './data/courses.db', autoload: true });

exports.getAllCourses = (callback) => {
  db.find({}, (err, docs) => {
    callback(err, docs);
  });
};

exports.getCourse = (id, callback) => {
  db.findOne({ _id: id }, (err, doc) => {
    callback(err, doc);
  });
};

exports.addCourse = (courseData, callback) => {
  db.insert(courseData, callback);
};

exports.updateCourse = (id, updatedData, callback) => {
  db.update({ _id: id }, { $set: updatedData }, {}, callback);
};

exports.deleteCourse = (id, callback) => {
  db.remove({ _id: id }, {}, callback);
};
