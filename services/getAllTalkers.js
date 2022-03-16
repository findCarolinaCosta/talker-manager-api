const { readFile } = require('./fileManipulation');

module.exports = async (_req, res, next) => {
  try {
    const talkers = JSON.parse(await readFile('talker.json'));
    return res.status(200).json(talkers);
  } catch (e) {
    console.log(e);
    next(Error, '');
  }
};