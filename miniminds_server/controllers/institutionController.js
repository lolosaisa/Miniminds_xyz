const Institution = require('../models/Institution');
const Student = require('../models/Student');
const Teacher = require('../models/Teacher');
const { createBlockchainAccount } = require('../config/blockchain');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

// Token verification middleware
const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
     console.log("Registering institution with body:", req.body);
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.institutionId = decoded.institutionId;
    next();
  } catch (error) {
    console.error('JWT verification error:', error);
    res.status(401).json({ message: 'Invalid token.' });
  }
};

// Register institution
const registerInstitution = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { institutionName, email, phone, address, institutionType } = req.body;

    // Check if institution already exists
    const existingInstitution = await Institution.findOne({ $or: [{ email }, { phone }] });
    if (existingInstitution) {
      return res.status(400).json({ message: 'Institution with this email or phone already exists' });
    }

    // Create blockchain account
    const blockchainAccount = await createBlockchainAccount(phone);

    // Create new institution
    const institution = new Institution({
      institutionName,
      email,
      phone,
      address,
      institutionType,
      blockchainAccount,
    });

    await institution.save();

    // Generate JWT
    const token = jwt.sign(
      { institutionId: institution._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );

    res.status(201).json({
      message: 'Institution registered successfully',
      institution: {
        id: institution._id,
        institutionName,
        email,
        phone,
        address,
        institutionType,
        blockchainAddress: blockchainAccount.address,
      },
      token,
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get institution details
const getInstitution = async (req, res) => {
  try {
    const institutionId = req.params.id;
    // Ensure the requesting institution matches the token
    if (req.institutionId !== institutionId) {
      return res.status(403).json({ message: 'Access denied. Unauthorized institution.' });
    }

    // Fetch institution with populated students and teachers
    const institution = await Institution.findById(institutionId)
      .populate({
        path: 'students',
        select: '-__v', // Exclude version key
      })
      .populate({
        path: 'teachers',
        select: '-__v', // Exclude version key
      });

    if (!institution) {
      return res.status(404).json({ message: 'Institution not found' });
    }

    // Return the full institution document
    res.status(200).json({
      message: 'Institution retrieved successfully',
      institution,
    });
  } catch (error) {
    console.error('Get institution error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all institutions
const getAllInstitutions = async (req, res) => {
  try {
    const institutions = await Institution.find().select('-__v'); // Optional: exclude version key
    res.status(200).json({
      message: 'Institutions retrieved successfully',
      institutions,
    });
  } catch (error) {
    console.error('Get all institutions error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a student
const addStudent = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const institutionId = req.institutionId;
    const { name, email, studentId, gradeLevel, stemCourses } = req.body;

    // Check if student already exists
    const existingStudent = await Student.findOne({ $or: [{ email }, { studentId }] });
    if (existingStudent) {
      return res.status(400).json({ message: 'Student with this email or ID already exists' });
    }

    // Verify institution exists
    const institution = await Institution.findById(institutionId);
    if (!institution) {
      return res.status(404).json({ message: 'Institution not found' });
    }

    // Create new student
    const student = new Student({
      name,
      email,
      studentId,
      gradeLevel,
      stemCourses,
      institution: institutionId,
    });

    await student.save();

    // Update institution's student list
    institution.students.push(student._id);
    await institution.save();

    res.status(201).json({
      message: 'Student added successfully',
      student: {
        id: student._id,
        name,
        email,
        studentId,
        gradeLevel,
        stemCourses,
      },
    });
  } catch (error) {
    console.error('Add student error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update student
const updateStudent = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const institutionId = req.institutionId;
    const studentId = req.params.id;
    const { name, email, gradeLevel, stemCourses } = req.body;

    // Find student and verify they belong to the institution
    const student = await Student.findOne({ _id: studentId, institution: institutionId });
    if (!student) {
      return res.status(404).json({ message: 'Student not found or not associated with this institution' });
    }

    // Update student fields
    student.name = name || student.name;
    student.email = email || student.email;
    student.gradeLevel = gradeLevel || student.gradeLevel;
    student.stemCourses = stemCourses || student.stemCourses;

    await student.save();

    res.status(200).json({
      message: 'Student updated successfully',
      student: {
        id: student._id,
        name: student.name,
        email: student.email,
        gradeLevel: student.gradeLevel,
        stemCourses: student.stemCourses,
      },
    });
  } catch (error) {
    console.error('Update student error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete student
const deleteStudent = async (req, res) => {
  try {
    const institutionId = req.institutionId;
    const studentId = req.params.id;

    // Find student and verify they belong to the institution
    const student = await Student.findOne({ _id: studentId, institution: institutionId });
    if (!student) {
      return res.status(404).json({ message: 'Student not found or not associated with this institution' });
    }

    // Remove student from institution's student list
    await Institution.updateOne(
      { _id: institutionId },
      { $pull: { students: studentId } }
    );

    // Delete student
    await student.deleteOne();

    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error('Delete student error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Add a teacher
const addTeacher = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const institutionId = req.institutionId;
    const { name, email, teacherId, stemSubjects } = req.body;

    // Check if teacher already exists
    const existingTeacher = await Teacher.findOne({ $or: [{ email }, { teacherId }] });
    if (existingTeacher) {
      return res.status(400).json({ message: 'Teacher with this email or ID already exists' });
    }

    // Verify institution exists
    const institution = await Institution.findById(institutionId);
    if (!institution) {
      return res.status(404).json({ message: 'Institution not found' });
    }

    // Create new teacher
    const teacher = new Teacher({
      name,
      email,
      teacherId,
      stemSubjects,
      institution: institutionId,
    });

    await teacher.save();

    // Update institution's teacher list
    institution.teachers.push(teacher._id);
    await institution.save();

    res.status(201).json({
      message: 'Teacher added successfully',
      teacher: {
        id: teacher._id,
        name,
        email,
        teacherId,
        stemSubjects,
      },
    });
  } catch (error) {
    console.error('Add teacher error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Update teacher
const updateTeacher = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const institutionId = req.institutionId;
    const teacherId = req.params.id;
    const { name, email, stemSubjects } = req.body;

    // Find teacher and verify they belong to the institution
    const teacher = await Teacher.findOne({ _id: teacherId, institution: institutionId });
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found or not associated with this institution' });
    }

    // Update teacher fields
    teacher.name = name || teacher.name;
    teacher.email = email || teacher.email;
    teacher.stemSubjects = stemSubjects || teacher.stemSubjects;

    await teacher.save();

    res.status(200).json({
      message: 'Teacher updated successfully',
      teacher: {
        id: teacher._id,
        name: teacher.name,
        email: teacher.email,
        stemSubjects: teacher.stemSubjects,
      },
    });
  } catch (error) {
    console.error('Update teacher error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete teacher
const deleteTeacher = async (req, res) => {
  try {
    const institutionId = req.institutionId;
    const teacherId = req.params.id;

    // Find teacher and verify they belong to the institution
    const teacher = await Teacher.findOne({ _id: teacherId, institution: institutionId });
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found or not associated with this institution' });
    }

    // Remove teacher from institution's teacher list
    await Institution.updateOne(
      { _id: institutionId },
      { $pull: { teachers: teacherId } }
    );

    // Delete teacher
    await teacher.deleteOne();

    res.status(200).json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    console.error('Delete teacher error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Manage STEM admin tasks (e.g., assign courses, track progress)
const manageStemAdmin = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const institutionId = req.institutionId;
    const { studentId, teacherId, action, courseId, progressData } = req.body;

    // Verify institution exists
    const institution = await Institution.findById(institutionId);
    if (!institution) {
      return res.status(404).json({ message: 'Institution not found' });
    }

    if (action === 'assignCourse') {
      // Assign a STEM course to a student
      const student = await Student.findOne({ _id: studentId, institution: institutionId });
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      if (!student.stemCourses.includes(courseId)) {
        student.stemCourses.push(courseId);
        await student.save();
      }

      res.status(200).json({ message: `Course ${courseId} assigned to student ${studentId}` });
    } else if (action === 'assignTeacher') {
      // Assign a teacher to a student for a course
      const student = await Student.findOne({ _id: studentId, institution: institutionId });
      const teacher = await Teacher.findOne({ _id: teacherId, institution: institutionId });
      if (!student || !teacher) {
        return res.status(404).json({ message: 'Student or teacher not found' });
      }

      student.assignedTeachers = student.assignedTeachers || {};
      student.assignedTeachers[courseId] = teacherId;
      await student.save();

      res.status(200).json({ message: `Teacher ${teacherId} assigned to student ${studentId} for course ${courseId}` });
    } else if (action === 'updateProgress') {
      // Update student progress for a STEM course
      const student = await Student.findOne({ _id: studentId, institution: institutionId });
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }

      student.progress = student.progress || {};
      student.progress[courseId] = progressData;
      await student.save();

      res.status(200).json({ message: `Progress updated for student ${studentId} in course ${courseId}` });
    } else {
      return res.status(400).json({ message: 'Invalid action' });
    }
  } catch (error) {
    console.error('STEM admin error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all students for an institution
const getAllStudents = async (req, res) => {
  try {
    const institutionId = req.institutionId;
    const students = await Student.find({ institution: institutionId }).select('-__v');
    res.status(200).json({ students });
  } catch (error) {
    console.error('Get all students error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

// Get all teachers for an institution
const getAllTeachers = async (req, res) => {
  try {
    const institutionId = req.institutionId;
    const teachers = await Teacher.find({ institution: institutionId }).select('-__v');
    res.status(200).json({ teachers });
  } catch (error) {
    console.error('Get all teachers error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  verifyToken,
  registerInstitution,
  getInstitution,
  getAllInstitutions,
  addStudent,
  updateStudent,
  deleteStudent,
  addTeacher,
  updateTeacher,
  deleteTeacher,
  manageStemAdmin,
  getAllStudents,
  getAllTeachers,
};