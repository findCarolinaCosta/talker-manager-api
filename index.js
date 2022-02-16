const express = require('express');
const bodyParser = require('body-parser');
const {
  getAllTalkers,
  getTalkerById,
  login,
  createTalker,
  getAuthorization,
  getValidateName,
  getValidateAge,
  getValidateTalk,
  getValidateRate,
  getWatchedAtFormat,
  editTalker,
} = require('./services');

const validate = [
  getAuthorization,
  getValidateTalk,
  getValidateName, 
  getValidateAge,
  getValidateRate,
  getWatchedAtFormat,
];

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', getAllTalkers);

app.get('/talker/:id', getTalkerById);

app.post('/login', login);

app.post('/talker', validate, createTalker);

app.put('/talker/:id', validate, editTalker);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// Middleware de erro
app.use((err, _req, res, _next) => {
  if (err.message.message.includes('O campo "talk"')) {
  res.status(400).send(err.message);
  }
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log('Online');
});
