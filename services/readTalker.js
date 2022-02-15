const fs = require('fs/promises');

module.exports = () => {
  try {
    const fileContent = fs.readFile('talker.json', 'utf-8');
    return fileContent;
  } catch (err) {
    return err;
  }
};
