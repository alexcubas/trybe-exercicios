const readline = require('readline-sync');

const distancia = readline.questionInt('distancia em metros: ');

const tempo = readline.questionInt('tempo em segundos: ');

module.exports = {
  distancia,
  tempo,
};
