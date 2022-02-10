const { distancia, tempo } = require('./questao');
const calcVel = require('./velocidade');

console.log(`A velocidade média foi ${calcVel(distancia,tempo)}Km por hora`)