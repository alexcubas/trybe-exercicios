const readline = require('readline-sync');

const altura = readline.questionInt('Qual sua altura?');
const peso = readline.questionFloat('Qual seu peso?');

module.exports = {
  altura,
  peso,
};
