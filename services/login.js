const generateToken = require('./helpers/generateToken');

module.exports = (_req, res, next) => {
  try {
    const token = generateToken(8);

    return res.status(200).json({ token });
  } catch (e) {
    next(e);
  }
};