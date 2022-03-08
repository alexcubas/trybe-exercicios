const express = require('express');

const routerBook = require('./controller/routerBook');
const error = require('./middlewares/error');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use('/book', routerBook);
app.use(error);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));