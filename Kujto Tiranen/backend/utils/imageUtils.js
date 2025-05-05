const fs = require('fs');
const crypto = require('crypto');
const imghash = require('imghash');
const fsPromises = require('fs').promises;


exports.generateImageHash = async (imageBuffer) => {
  return await imghash.hash(imageBuffer, 16);
};

exports.generateFileName = (mimetype) => {
  const uniqueSuffix = Date.now() + '-' + crypto.randomBytes(4).toString('hex');
  const extension = mimetype.split('/')[1];
  return `${uniqueSuffix}.${extension}`;
};

exports.ensureDirectoryExists = async (dirPath) => {
  if (!fs.existsSync(dirPath)) {
    await fsPromises.mkdir(dirPath, { recursive: true });
  }
};
