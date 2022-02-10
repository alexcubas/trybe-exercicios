const imc = require('./imc')
const { peso, altura } = require('./question');
const situacao = require('./situacaoIMC');

const result = imc(peso, altura);

console.log(`seu IMC é ${result}, ${situacao(result)}`);
