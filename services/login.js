const generateToken = require('./helpers/generateToken');
const { getValidateEmail, getValidatePassword } = require('./helpers/getValidateLoginInfos');

module.exports = (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validateEmail = getValidateEmail(email);
    const validatePassword = getValidatePassword(password);

    if (validateEmail) {
        return res.status(400).json({ message: validateEmail });
    }
    
    if (validatePassword) {
      return res.status(400).json({ message: validatePassword });
    }
    const token = generateToken(8);

    return res.status(200).json({ token });
  } catch (e) {
    next(e);
  }
};