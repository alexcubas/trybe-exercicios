const testando = (numero) => {
  if (typeof numero !== 'number') {
    return "o valor deve ser um número"
  }

  if (numero > 0) {
    return 'positivo'
  } else if (numero < 0) {
    return 'negativo'
  } else {
    return 'neutro'
  }
}

// console.log(testando(1))

module.exports = testando