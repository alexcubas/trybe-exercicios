const caixaAlta = (str, callback) => {
  callback = str.toUpperCase();
  return callback
}

const primeiraLetra = (str, callback) => {
  callback = str.substr(0, 1);
  return callback;
}

const concatenarString = (str1, str2) => {
  return str1.concat(str2)
}

module.exports = { caixaAlta, primeiraLetra, concatenarString }