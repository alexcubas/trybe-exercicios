const { expect } = require('@jest/globals') 
const a = require('./exercicio1');
jest.mock('./exercicio1')

// test('numeroAleatorio', () => {
//   a.numeroAleatório = jest.fn().mockReturnValue(10);
//   // a.numeroAleatório(10);
  
//   expect(a.numeroAleatório()).toBe(10);
//   expect(a.numeroAleatório).toHaveBeenCalled();
//   expect(a.numeroAleatório).toHaveBeenCalledTimes(1);
// });

test('deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo', () => {
  a.numeroAleatório.mockImplementation((a, b) => a / b);

  expect(a.numeroAleatório(10, 2)).toBe(5);
  expect(a.numeroAleatório).toHaveBeenCalled();
  expect(a.numeroAleatório).toHaveBeenCalledTimes(1);
  expect(a.numeroAleatório).toHaveBeenCalledWith(10, 2);
})

describe('exercicio 3', () => {
  test('crie uma nova implementação que receba três parâmetros e retorne sua multiplicação', () => {
    a.numeroAleatório.mockReset();
    a.numeroAleatório.mockImplementation((a, b, c) => a * b * c);
  
    expect(a.numeroAleatório(2, 2, 3)).toBe(12);
    expect(a.numeroAleatório).toHaveBeenCalled();
    expect(a.numeroAleatório).toHaveBeenCalledTimes(1);
    expect(a.numeroAleatório).toHaveBeenCalledWith(2, 2, 3);
  
  })
  test('esete sua implementação e crie uma nova, que receba um parâmetro e retorne seu dobro', () => {
    a.numeroAleatório.mockReset();
    expect(a.numeroAleatório).toHaveBeenCalledTimes(0);

    a.numeroAleatório.mockImplementation((a) => a * 2);

    expect(a.numeroAleatório(10)).toBe(20);
    expect(a.numeroAleatório).toHaveBeenCalled();
    expect(a.numeroAleatório).toHaveBeenCalledTimes(1);
    expect(a.numeroAleatório).toHaveBeenCalledWith(10);
  })
})