function getValidateName(req, res, next) {
  const { name } = req.body;
  try {
    if (!name || name === '') {
      return res.status(400).json({ message: 'O campo "name" é obrigatório' });
    }
  
    if (name.length < 3) {
      return res.status(400).json({ message: 'O "name" deve ter pelo menos 3 caracteres' });
    }
    next();
  } catch (e) {
    next(e);
  }
}

function getValidateAge(req, res, next) {
  const { age } = req.body;
  try {
    if (!age) {
      return res.status(400).json({ message: 'O campo "age" é obrigatório' });
    }
  
    if (age < 18) {
      return res.status(400).json({ message: 'A pessoa palestrante deve ser maior de idade' });
    }
    next();
  } catch (e) {
    next(e);
  }
}

function getValidateTalk(req, res, next) {
  const { talk } = req.body;
  try {
  if (!talk.watchedAt || !talk.rate || !talk) {
    return res.status(400)
    .json({ message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' });
  }
   next();
  } catch (e) {
    // console.error(e.status);
    e.message = { 
      message: 'O campo "talk" é obrigatório e "watchedAt" e "rate" não podem ser vazios' };
    next(e);
  }
}

function getValidateRate(req, res, next) {
    try {
      const { talk: { rate } } = req.body;
    if (rate < 1 || rate > 5) {
      return res.status(400)
      .json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }
    next();
    } catch (e) {
      console.log(e);
      next(e);
    }
}

function getWatchedAtFormat(req, res, next) {
  try {
    const { talk: { watchedAt } } = req.body;
    const verify = /^\d{2}[./]\d{2}[./]\d{4}$/;
    if (!verify.test(watchedAt) && watchedAt !== undefined) {
      return res.status(400)
      .json({ message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"' });
    }
    next();
  } catch (e) {
    console.log(e);
    next(e);
  }
}

module.exports = {
  getValidateName,
  getValidateAge,
  getValidateTalk,
  getValidateRate,
  getWatchedAtFormat,
};