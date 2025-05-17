const Institution = require('../models/Institution');
const { createBlockchainAccount } = require('../config/blockchain');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');
  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.institutionId = decoded.institutionId;
    next();
  } catch (error) {
    console.error('JWT verification error:', error);
    res.status(401).json({ message: 'Invalid token.' });
  }
};

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

    // Create blockchain account with on-chain transaction
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
      { expiresIn: '1h' } // Token expires in 1 hour
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
        transactionHash: blockchainAccount.transactionHash,
      },
      token,
    });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

const getInstitution = async (req, res) => {
  try {
    const institutionId = req.params.id;
    // Ensure the requesting institution matches the token
    if (req.institutionId !== institutionId) {
      return res.status(403).json({ message: 'Access denied. Unauthorized institution.' });
    }

    const institution = await Institution.findById(institutionId);
    if (!institution) {
      return res.status(404).json({ message: 'Institution not found' });
    }
    res.status(200).json({
      id: institution._id,
      institutionName: institution.institutionName,
      email: institution.email,
      phone: institution.phone,
      address: institution.address,
      institutionType: institution.institutionType,
      blockchainAddress: institution.blockchainAccount.address,
      transactionHash: institution.blockchainAccount.transactionHash,
    });
  } catch (error) {
    console.error('Get institution error:', error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerInstitution, getInstitution, verifyToken };