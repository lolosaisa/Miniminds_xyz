const { ethers } = require('ethers');
const crypto = require('crypto');
require('dotenv').config();

console.log(process.env)

// Validate environment variables
if (!process.env.BASE_RPC_URL) {
  throw new Error('BASE_RPC_URL is not defined in .env file');
}
if (!process.env.ENCRYPTION_KEY ) {
  throw new Error('ENCRYPTION_KEY is missing or invalid in .env file (must be 64 hex characters)');
}

const provider = new ethers.JsonRpcProvider(process.env.BASE_RPC_URL);
const encryptionKey = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');

const createBlockchainAccount = async (phone) => {
  // Create deterministic wallet based on phone number
  const seed = crypto.createHash('sha256').update(phone).digest('hex');
  const wallet = ethers.Wallet.createRandom({ extraEntropy: seed });
  
  // Encrypt private key
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-gcm', encryptionKey, iv);
  let encryptedPrivateKey = cipher.update(wallet.privateKey, 'utf8', 'hex');
  encryptedPrivateKey += cipher.final('hex');
  const authTag = cipher.getAuthTag();
  
  return {
    address: wallet.address,
    encryptedPrivateKey: `${iv.toString('hex')}:${encryptedPrivateKey}:${authTag.toString('hex')}`,
    publicKey: wallet.publicKey,
  };
};

module.exports = { provider, createBlockchainAccount };