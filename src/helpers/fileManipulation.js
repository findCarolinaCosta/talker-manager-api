const fs = require('fs/promises');

function readFile() {
  try {
    const fileContent = fs.readFile('talker.json', 'utf-8');
    return fileContent;
  } catch (err) {
    return err;
  }
}

function writeFile(file, addition) {
  try {
    return fs.writeFile(file, JSON.stringify(addition));
  } catch (err) {
    return err;
  }
}

module.exports = { readFile, writeFile };