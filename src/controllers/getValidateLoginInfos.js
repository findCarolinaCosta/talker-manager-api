function getValidateEmail(req, res, next) {
  try {
    const { email } = req.body;
    const verify = /\S+@\S+\.\S+/;
    if (!email || email.length === 0) {
      return res.status(400).json({ message: 'O campo "email" é obrigatório' });
    }
  
    if (!verify.test(email)) {
      return res.status(400).json({ message: 'O "email" deve ter o formato "email@email.com"' });
    }
    next();
  } catch (e) {
    next(e);
  }
}

function getValidatePassword(req, res, next) {
  try {
    const { password } = req.body;
    
    if (!password || password.length === 0) {
      return res.status(400).json({ message: 'O campo "password" é obrigatório' });
    }
  
    if (password.length < 6) {
      return res.status(400).json({ message: 'O "password" deve ter pelo menos 6 caracteres' });
    }
    next();
  } catch (e) {
    next(e);
  }
}

module.exports = { getValidateEmail, getValidatePassword };