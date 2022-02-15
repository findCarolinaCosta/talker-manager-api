function getValidateEmail(email) {
  const verify = /\S+@\S+\.\S+/;

  if (!email || email.length === 0) {
    return 'O campo "email" é obrigatório';
  }

  if (!verify.test(email)) {
    return 'O "email" deve ter o formato "email@email.com"';
  }
  return false;
}

function getValidatePassword(password) {
  if (!password || password.length === 0) {
    return 'O campo "password" é obrigatório';
  }

  if (password.length < 6) {
    return 'O "password" deve ter pelo menos 6 caracteres';
  }
  return false;
}

module.exports = { getValidateEmail, getValidatePassword };