const readline = require("readline-sync");

  opcoes = ["adivinhacao", "indice", "velcar"]

  const escolha = readline.keyInSelect(opcoes, 'Escolha o jogo... ')

  const resposta = opcoes[escolha]
  
console.log(`sua escolha é ${resposta}`)

const nSei = () => {
  if (resposta === "adivinhacao") {
    const adivinhacao = require('./adivinhacao/index')
    return adivinhacao
  } else if (resposta === "indice") {
    const indice = require('./indice/index')
    return indice
  } else if (resposta === "velcar") {
    const velcar = require('./velCar/index')
    return velcar
  }
}

nSei()