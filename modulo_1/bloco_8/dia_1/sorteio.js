const sorteio = () => {
  return Math.floor(Math.random() * (6 - 1) + 1);
}

const numeroEscolhido = (numero, callback) => {
  const numeroSorteado = callback()
  if (numero === numeroSorteado) {
    console.log('seu numero: ' + numero)
    console.log('numero sorteado: ' + numeroSorteado)
    return `Parabens voce ganhou `
  } else {
    console.log('seu numero: ' + numero)
    console.log('numero sorteado: ' + numeroSorteado)
    return `perdeu otario`
  }
}
for (let index = 0; index < 100; index += 1) {
console.log(numeroEscolhido(5, sorteio))
}