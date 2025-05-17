const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  studentId: { type: String, required: true, unique: true },
  gradeLevel: { type: String, required: true },
  stemCourses: [{ type: String }], // Array of course IDs
  institution: { type: mongoose.Schema.Types.ObjectId, ref: 'Institution', required: true },
  assignedTeachers: { type: Map, of: mongoose.Schema.Types.ObjectId }, // Course ID -> Teacher ID
  progress: { type: Map, of: Object }, // Course ID -> Progress data
});

module.exports = mongoose.model('Student', studentSchema);