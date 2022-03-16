const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./src/controllers');

const validateChange = [
  controller.getAuthorization,
  controller.getValidateTalk,
  controller.getValidateName, 
  controller.getValidateAge,
  controller.getValidateRate,
  controller.getWatchedAtFormat,
];

const validateLogin = [
  controller.getValidateEmail,
  controller.getValidatePassword,
];

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', controller.getAllTalkers);

app.get('/talker/search', controller.getAuthorization, controller.searchTalker);

app.get('/talker/:id', controller.getTalkerById);

app.post('/login', validateLogin, controller.login);

app.post('/talker', validateChange, controller.createTalker);

app.put('/talker/:id', validateChange, controller.editTalker);

app.delete('/talker/:id', controller.getAuthorization, controller.deleteTalker);

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
