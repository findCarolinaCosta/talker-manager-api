const crypto = require('crypto');

module.exports = (characters) => crypto.randomBytes(characters).toString('hex');
