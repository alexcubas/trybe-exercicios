const express = require('express');
const bodyParser = require('body-parser');
const ping = require('./controllers/ping');
const controllerCep = require('./controllers/cep');
const middwaresCep = require('./middwares/midCep');

const PORT = 3009;

const app = express();

app.use(bodyParser.json());

app.get('/ping', ping);
app.get('/cep/:cep',middwaresCep.midCep, controllerCep.queryCep);

app.listen(PORT, () => console.log(`rodando na porta ${PORT}`));
