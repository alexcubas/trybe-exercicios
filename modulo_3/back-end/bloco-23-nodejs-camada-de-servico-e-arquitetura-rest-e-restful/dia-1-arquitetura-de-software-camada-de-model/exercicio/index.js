const express = require('express');

const controllerUser = require('./controller/user');
const middleWare = require('./middleware/validadeUser');

const PORT = 3000;

const app = express();

app.use(express.json());

app.get('/user', controllerUser.getal);
app.get('/user/:id', controllerUser.getById);
app.post('/user', middleWare.validadeExist ,middleWare.passwordValidate, controllerUser.createe);
app.put('/user/:id',middleWare.validadeExist ,middleWare.passwordValidate, controllerUser.attUser)
app.delete('/user/:id', controllerUser.exclude)

app.listen(PORT, () => console.log(`listening on port ${PORT}`));