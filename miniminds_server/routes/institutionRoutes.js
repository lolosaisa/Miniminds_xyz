const express = require('express');
const { check } = require('express-validator');
const { registerInstitution } = require('../controllers/institutionController');
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

module.exports = router;