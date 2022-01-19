const { expect } = require('@jest/globals') 
const libs = require('./exercicio2')
jest.mock('./exercicio2')

test('Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa', () => {
  libs.caixaAlta.mockImplementation((str, callback) => {
  callback = str.toLowerCase();
  return callback;
  })

  expect(libs.caixaAlta('OLA')).toBe('ola');
  expect(libs.caixaAlta).toHaveBeenCalled();
  expect(libs.caixaAlta).toHaveBeenCalledTimes(1);
})

test('Para a segunda função, uma nova implementação deve retornar a última letra de uma string', () => {
  libs.primeiraLetra.mockImplementation((str, callback) => {
    callback = str.slice(-1)
    return callback;
  })

  expect(libs.primeiraLetra('ola')).toBe('a');
  expect(libs.primeiraLetra).toHaveBeenCalled();
  expect(libs.primeiraLetra).toHaveBeenCalledTimes(1);
})

test('A terceira deve receber três strings e concatená-las', () => {
  libs.concatenarString.mockImplementation((str1, str2, str3) => str1.concat(str2, str3))

  expect(libs.concatenarString('ola, ', 'tudo ', 'bem?')).toBe('ola, tudo bem?')
  expect(libs.concatenarString).toHaveBeenCalled();
  expect(libs.concatenarString).toHaveBeenCalledTimes(1);
})

