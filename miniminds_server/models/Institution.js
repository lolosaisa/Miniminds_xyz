const mongoose = require('mongoose');

const institutionSchema = new mongoose.Schema({
    institutionName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    address: { type: String, required: true },
    institutionType: { type: String, required: true },
    blockchainAccount: {
        address: String,
        encryptedPrivateKey: String,
        publicKey: String,
    },
    createdAt: { type: Date, default: Date.now },
});


module.exports = mongoose.model('Institution', institutionSchema);