const readTalker = require('./readTalker');

module.exports = async (_req, res, next) => {
  try {
    const talkers = JSON.parse(await readTalker());
    return res.status(200).json(talkers);
  } catch (e) {
    console.log(e);
    next(Error, '');
  }
};