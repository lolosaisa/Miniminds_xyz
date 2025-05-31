const express = require('express');
const { check } = require('express-validator');
const { 
  registerInstitution, 
  getInstitution, 
  verifyToken, 
  addStudent, 
  updateStudent, 
  deleteStudent, 
  addTeacher, 
  updateTeacher, 
  deleteTeacher, 
  manageStemAdmin,
  getAllStudents,
  getAllTeachers 
} = require('../controllers/institutionController');
const { validateInstitution, validateStudent, validateTeacher, validateStemAdmin } = require('../middleware/validate');

const router = express.Router();

router.post(
  '/register',
  [
    check('institutionName').isLength({ min: 2 }),
    check('email').isEmail(),
    check('phone').isLength({ min: 10 }),
    check('address').isLength({ min: 5 }),
    check('institutionType').notEmpty(),
  ],
  registerInstitution
);

router.get('/', verifyToken, getInstitution); 
router.get('/:id', verifyToken, getInstitution);
//router.post('/students', verifyToken, validateStudent, addStudent); addiong a route for testing without validation
router.post('/students', addStudent); // For testing without validation

router.put('/students/:id', verifyToken, validateStudent, updateStudent);
router.delete('/students/:id', verifyToken, deleteStudent);
router.post('/teachers', verifyToken, validateTeacher, addTeacher);
router.put('/teachers/:id', verifyToken, validateTeacher, updateTeacher);
router.delete('/teachers/:id', verifyToken, deleteTeacher);
router.post('/stem-admin', verifyToken, validateStemAdmin, manageStemAdmin);
router.get('/students', verifyToken, getAllStudents);
router.get('/teachers', verifyToken, getAllTeachers);

module.exports = router;