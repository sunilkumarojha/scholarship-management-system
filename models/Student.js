const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: String,
  email: String,
  enrollmentDate: Date,
  state: { type: String, default: 'Maharashtra' },
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
