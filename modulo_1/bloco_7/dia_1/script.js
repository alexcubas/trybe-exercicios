// const testingScope = (escopo) => {
//   if (escopo === true) {
//     let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
//     ifScope = ifScope + ` ótimo, fui utilizada no escopo !`;
//     console.log(ifScope);
//   } else {
//     let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
//     console.log(elseScope);
//   }
//   // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
// }



// testingScope(true);

// const oddsAndEvens = [13, 3, 4, 10, 7, 2];
// // Seu código aqui.
// const comparando = (a, b) => a - b;

// oddsAndEvens.sort(comparando)

// console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉


// let numeroFat = 5
// let result = 1

//   for (let i = numeroFat; i >=2 ; i -= 1) {
//     result *= i;
//   }

// console.log(result)

const factorial = number => number > 1 ? number * factorial(number - 1) : 1;
console.log(factorial(5));

// const factorial = number => {
//   let result = 1;

//   for (let index = 2; index <= number; index += 1) {
//       result *= index;
//   }

//   return result;
// }

// console.log(factorial(5));