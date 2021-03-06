/* errorHandlerExample.js */
const express = require('express');
const fs = require('fs/promises');

const app = express();

app.get(
  '/:fileName',
  rescue(async (req, res) => {
    const file = await fs.readFile(`./${req.params.fileName}`);
    res.send(file.toString('utf-8'));
  })
);

app.use(function (err, req, res, next) {
  res.status(500).json({ error: `Erro: ${err.message}` });
});

app.listen(3007, () => { console.log('Ouvindo na porta 3007'); });