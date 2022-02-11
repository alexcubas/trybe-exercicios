const { expect } = require('chai');
const func = require('./index');
const escrevendo = require('./escrevendo');
const { stub } = require('sinon');
const fs = require('fs');

describe('testa se a funçao sera positivo, negativo ou netro', () => {
  it('função testa positivo', () => {
    const resp = func(1)

    expect(resp).to.be.equal('positivo');
  });
  it('função testa positivo', () => {
    const resp = func(0)

    expect(resp).to.be.equal('neutro');
  });
  it('função testa positivo', () => {
    const resp = func(-1)

    expect(resp).to.be.equal('negativo');
  });
describe('testa se a função é number', () => {
  it('se o valor nao for number', () => {
    const resp = func('a')

    expect(resp).to.be.equal("o valor deve ser um número")
  })
})
describe('testes para uma função que escreverá um conteúdo em um arquivo específico', () => {
  before(() => {
    stub(fs, 'writeFileSync');
  })

  after(() => {
    fs.writeFileSync.restore();
  })

  it(`apos concluir a escrita retorna um 'ok'`, () => {
    const resp = escrevendo('nomeArquivo.txt', 'escritaArquivo');

    expect(resp).to.be.equal('ok');

    expect(resp).to.be.a('string');
  })
})
})

