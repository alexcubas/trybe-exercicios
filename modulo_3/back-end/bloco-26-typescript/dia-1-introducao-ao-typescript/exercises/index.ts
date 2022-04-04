// ./index.ts

import * as Exercise from './exercises';

console.log(Exercise.greeter('Maria'));
console.log(Exercise.personAge('Maria', 40));
console.log(`A soma do array é igual a ${Exercise.sumArray([3, 6, 9])}`);

console.log(`Triângulo de base 10cm e altura 25cm: ${Exercise.triangle(10, 25)}cm²`);
console.log(`Triângulo de base 5cm e altura 30cm: ${Exercise.triangle(5, 30)}cm²`);
console.log(`Triângulo de base 100cm e altura 200cm: ${Exercise.triangle(10, 25)}cm²`);

console.log(`Quadrado de lado 10cm: ${Exercise.square(10)}cm²`);
console.log(`Quadrado de lado 5cm: ${Exercise.square(5)}cm²`);
console.log(`Quadrado de lado 100cm: ${Exercise.square(10)}cm²`);

console.log(`Retângulo de base 10cm e altura 25cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Retângulo de base 5cm e altura 30cm: ${Exercise.rectangle(5, 30)}cm²`);
console.log(`Retângulo de base 100cm e altura 200cm: ${Exercise.rectangle(10, 25)}cm²`);
console.log(`Calcule a área de um losango que tem D = 32cm e d = 18cm: ${Exercise.losango(32, 18)}cm²`);
console.log(`Calcule a área de um losango que tem D = 200cm e d = 50cm: ${Exercise.losango(200, 50)}cm²`);
console.log(`Calcule a área de um losango que tem D = 75cm e d = 25cm: ${Exercise.losango(75, 25)}cm²`);
console.log(`Calcule a área de um trapézio que tem B = 100cm, b = 70cm e altura = 50cm; ${Exercise.trapezio(100, 70, 50)}cm²`);
console.log(`Calcule a área de um trapézio que tem B = 75cm, b = 50cm e altura = 50cm; ${Exercise.trapezio(75, 50, 35)}cm²`);
console.log(`Calcule a área de um trapézio que tem B = 100cm, b = 70cm e altura = 50cm; ${Exercise.trapezio(150, 120, 80)}cm²`);
console.log(`Calcule a área de um círculo de raio igual 25cm; ${Exercise.circulo(25)}cm²`);
console.log(`Calcule a área de um círculo de raio igual 100cm; ${Exercise.circulo(100)}cm²`);
console.log(`Calcule a área de um círculo de raio igual 12.5cm; ${Exercise.circulo(12.5)}cm²`);

