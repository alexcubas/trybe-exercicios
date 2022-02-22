const express = require('express');
const router = require('./controllers/productController')

const app = express();

app.use(express.json());

app.use('/products', router);

app.listen(3008, () => {
  console.log("App listening on port 3008!");
});