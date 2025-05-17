const { body, check } = require('express-validator');

const validateInstitution = [
  body('institutionName').notEmpty().withMessage('Institution name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').notEmpty().withMessage('Phone number is required'),
  body('address').notEmpty().withMessage('Address is required'),
  body('institutionType').notEmpty().withMessage('Institution type is required'),
];

const validateStudent = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('studentId').notEmpty().withMessage('Student ID is required'),
  body('gradeLevel').notEmpty().withMessage('Grade level is required'),
];

const validateTeacher = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('teacherId').notEmpty().withMessage('Teacher ID is required'),
];

const validateStemAdmin = [
  body('action')
    .isIn(['assignCourse', 'assignTeacher', 'updateProgress'])
    .withMessage('Invalid action'),
  check('studentId')
    .if((value, { req }) => req.body.action !== 'assignTeacher')
    .notEmpty()
    .withMessage('Student ID is required'),
  check('teacherId')
    .if((value, { req }) => req.body.action === 'assignTeacher')
    .notEmpty()
    .withMessage('Teacher ID is required'),
  check('courseId')
    .if((value, { req }) =>
      ['assignCourse', 'assignTeacher', 'updateProgress'].includes(req.body.action)
    )
    .notEmpty()
    .withMessage('Course ID is required'),
];

module.exports = {
  validateInstitution,
  validateStudent,
  validateTeacher,
  validateStemAdmin,
};