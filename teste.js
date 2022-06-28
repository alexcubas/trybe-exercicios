function xablau(frase) {
var resultado = []

for (var letra = 0; letra <= frase.length; letra += 1) {
  resultado.push(frase[letra])
}

return resultado;
}

console.log(xablau('borboletinha ta na cozinha'));