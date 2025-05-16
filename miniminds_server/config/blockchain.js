const { ethers } = require('ethers');
const crypto = require('crypto');
require('dotenv').config();

// Validate environment variables
if (!process.env.BASE_RPC_URL) {
  throw new Error('BASE_RPC_URL is not defined in .env file');
}
if (!process.env.ENCRYPTION_KEY || !/^[0-9a-fA-F]{64}$/.test(process.env.ENCRYPTION_KEY)) {
  throw new Error('ENCRYPTION_KEY is missing or invalid in .env file (must be 64 hex characters)');
}
if (!process.env.FUNDING_PRIVATE_KEY) {
  throw new Error('FUNDING_PRIVATE_KEY is not defined in .env file');
}

const provider = new ethers.JsonRpcProvider(process.env.BASE_RPC_URL);
const encryptionKey = Buffer.from(process.env.ENCRYPTION_KEY, 'hex');
const fundingWallet = new ethers.Wallet(process.env.FUNDING_PRIVATE_KEY, provider);

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

  // Fund the new wallet with minimal ETH for the transaction
  const fundingTx = await fundingWallet.sendTransaction({
    to: wallet.address,
    value: ethers.parseEther('0.001'), // Small amount for gas
    gasLimit: 21000,
  });
  await fundingTx.wait();

  // Send a 0 ETH self-transaction to register the address on-chain
  const connectedWallet = new ethers.Wallet(wallet.privateKey, provider);
  const tx = await connectedWallet.sendTransaction({
    to: wallet.address,
    value: 0,
    gasLimit: 21000,
  });
  const receipt = await tx.wait();

  return {
    address: wallet.address,
    transactionHash: receipt.transactionHash,
    encryptedPrivateKey: `${iv.toString('hex')}:${encryptedPrivateKey}:${authTag.toString('hex')}`,
    publicKey: wallet.publicKey,
  };
};

module.exports = { provider, createBlockchainAccount };