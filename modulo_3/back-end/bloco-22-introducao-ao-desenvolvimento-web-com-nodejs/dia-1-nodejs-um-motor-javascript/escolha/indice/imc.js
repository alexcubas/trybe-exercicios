const imc = (peso, altura) => {
  // const peso = 70;
  // const altura = 178;
  return (peso / Math.pow(altura / 100, 2)).toFixed(1);
}

module.exports = imc;


