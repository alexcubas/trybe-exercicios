const numeroAleatório = (max, min) => {
  return Math.floor(Math.random() * (max - min)) + min;
}

module.exports = { numeroAleatório }

console.log(numeroAleatório(100, 0))

