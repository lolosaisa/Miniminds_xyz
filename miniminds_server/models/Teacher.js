const mongoose = require('mongoose');

const teacherSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  teacherId: { type: String, required: true, unique: true },
  stemSubjects: [{ type: String }], // Array of subjects taught
  institution: { type: mongoose.Schema.Types.ObjectId, ref: 'Institution', required: true },
});

module.exports = mongoose.model('Teacher', teacherSchema);