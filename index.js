const express = require('express');
const bodyParser = require('body-parser');
const getRegister = require('./services/getAllTalkers');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3000';

app.get('/talker', getRegister);

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
