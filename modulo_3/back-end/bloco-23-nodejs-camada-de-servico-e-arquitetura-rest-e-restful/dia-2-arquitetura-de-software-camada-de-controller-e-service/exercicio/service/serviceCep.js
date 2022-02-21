const cepModel = require('../models/cep');

const cepIsValid = (cep) => {
  const regexCep = /\d{5}-?\d{3}/;
  const teste = regexCep.test(cep);

  if(!teste) return false

  return true
}

const cepService = async (cep) => {
  const mensagem = {message: "CEP inválido"};
  const validcep = cepIsValid(cep);
  if (!validcep) return false;

  const cepId = await cepModel.queryCep(cep);

  return cepId;
}

module.exports = {
  cepService,
}