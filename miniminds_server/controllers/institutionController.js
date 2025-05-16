const Institution = require('../models/Institution');
const { createBlockchainAccount } = require('../config/blockchain');
const { validationResult } = require('express-validator');

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
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { registerInstitution };