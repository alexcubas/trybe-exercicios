const situacao = (imc) => {
  if (imc < 18.5) {
    return 'Abaixo do peso(magro)'
  } else if (imc >= 18.5 && imc < 25) {
    return 'Peso normal'
  } else if (imc >= 25 && imc < 30) {
    return 'Acima do Peso'
  } else if (imc >= 30.0 && imc <= 35) {
    return 'Obesidade grau 1'
  } else if (imc >= 35 && imc <= 40) {
    return 'Obesidade grau 2'
  } else if (imc >= 40) {
    return 'Obesidade grau 3'
  }
}

module.exports = situacao;
