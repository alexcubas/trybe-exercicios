// let numbers = [6, 10, 4, 18, 70, 100, 8, 2, 36, 28];

//EXERCICIO 1

// console.log(numbers)

//EXERCICIO 2

// contaToda = 0;
// for (contador = 0; contador < numbers.length; contador += 1) {
//   contaToda += numbers[contador]
// }
// console.log(contaToda)

//EXERCICIO 3

// let contador = 0;
// let contadorDivisorio = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   contador += numbers[index]
//     contadorDivisorio = contador / numbers.length
// }
// console.log(contadorDivisorio)

//EXERCICIO 4

// let contador = 0;
// let contadorDivisorio = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   contador += numbers[index]
//     contadorDivisorio = contador / numbers.length
   
// }
// if (contadorDivisorio > 20) {
//   console.log("valor maior que 20");
// } else {
//   console.log("valor menor ou igual a 20");
// }

//EXERCICIO 5

// let maiorN = 0;
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] > maiorN) {
//     maiorN =+ numbers[index]
//   }
// } console.log(maiorN)

//EXERCICIO 6

// numImpar.push(numbers[index]) para mostrar todos os numeros impares

// let numImpar = 0;

// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] % 2 != 0) {
//     numImpar ++
//   }
// }  if (numImpar === 0) {
//   console.log("nenhum valor impar")
// }
// console.log(numImpar)


//EXERCICIO 7

// let menorN = numbers[0]
// for (let index = 0; index < numbers.length; index += 1) {
//   if (numbers[index] < menorN) {
//     menorN = numbers[index]
//   }
// } console.log(menorN)

//EXERCICIO 8

// for (let numeros = 1; numeros <= 25; numeros += 1) {
//   console.log(numeros)
// }

//EXERCICIO 9

// let numbers = [];
// for (let numeros = 1; numeros <= 25; numeros += 1) {
//   numbers.push(numeros)
// }

// for (let numerosDivisao = 1; numerosDivisao <= numbers.length; numerosDivisao += 1) {
//   console.log(numerosDivisao + " / 2 = " + numerosDivisao / 2)
// }
 
//EXERCICIO 1 BONUS 

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if(numbers[index] < numbers[secondIndex]) {
//       let position = numbers[index];
//     numbers[index] = numbers[secondIndex];
//     numbers[secondIndex] = position;
//     }
//   }
// }
// console.log(numbers)

//EXERCICIO 2 BONUS


// for (let index = 1; index < numbers.length; index += 1) {
//   for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
//     if(numbers[index] > numbers[secondIndex]) {
//       let position = numbers[index];
//     numbers[index] = numbers[secondIndex];
//     numbers[secondIndex] = position;
//     }
//   }
// } 
// console.log(numbers)

//EXERCICIO 3 BONUS


// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let multiplicacaoNumbers = [];

// for (let index = 0; index < numbers.length; index += 1) {
//     if (index === numbers.length -1) {
//       multiplicacaoNumbers.push(numbers[index] * 2)
//     } else {
//       multiplicacaoNumbers.push(numbers[index] * numbers[index +1])
//     }
//   }
// console.log(multiplicacaoNumbers)


let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let multiplicacaoNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  multiplicacaoNumbers.push(numbers[index] * numbers[index +1] || numbers[index] * 2)
  }
console.log(multiplicacaoNumbers)
