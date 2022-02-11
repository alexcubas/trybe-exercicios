const fs = require('fs')

const content = 'Some content!'
const arquivo = '/home/alex/Downloads/trybe/modulo_3/back-end/bloco-22-introducao-ao-desenvolvimento-web-com-nodejs/dia-3-mocha-chai-e-sinon-testes-de-back-end-com-nodejs/pratica_dia/testando.txt'

const escrevendo = (arquivo, content) => {
  fs.writeFileSync(arquivo, content);
  return 'ok'
};

// console.log(escrevendo(arquivo, content))


module.exports = escrevendo;