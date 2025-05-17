const mongoose = require('mongoose');

const institutionSchema = new mongoose.Schema({
  institutionName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true, unique: true },
  address: { type: String, required: true },
  institutionType: { type: String, required: true },
  blockchainAccount: {
    address: { type: String, required: true },
    encryptedPrivateKey: { type: String, required: true },
    publicKey: { type: String, required: true },
  },
  students: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Student' }],
  teachers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Teacher' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

// Update `updatedAt` timestamp on save
institutionSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Institution', institutionSchema);