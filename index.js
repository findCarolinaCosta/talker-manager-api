const express = require('express');
const bodyParser = require('body-parser');
const { getAllTalkers, getTalkerById, login } = require('./services');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', getAllTalkers);

app.get('/talker/:id', getTalkerById);

app.post('/login', login);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

// Middleware de erro
app.use((err, _req, res, _next) => {
  res.status(500).send(err.message);
});

app.listen(PORT, () => {
  console.log('Online');
});
