// // Faça uma lista com as suas frutas favoritas
// const specialFruit = ['morango', 'abacaxi', 'limao'];

// // Faça uma lista de complementos que você gostaria de adicionar
// const additionalItens = ['sorvete', 'ninho', 'nutela'];

// const fruitSalad = (fruit, additional) => {
//   const juntandoTudo = [...specialFruit, ...additionalItens]
//   return juntandoTudo
// };

// console.log(fruitSalad(specialFruit, additionalItens));

// // -----------------------------------------------

// const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

// console.log(Math.max(...randomNumbers)); // 800
// console.log(Math.min(...randomNumbers)); // 5

// -------------------------------------------------

// function quantosParams(...args) {
//   console.log('parâmetros:', args);
//   return `Você passou ${args.length} parâmetros para a função.`;
// }

// console.log(quantosParams(0, 1, 2)); // Você passou 3 parâmetros para a função.
// console.log(quantosParams('string', null, [1, 2, 3], { })); // Você passou 4 parâmetros para a função.

// --------------------------------------------------

const getNationality = ({ firstName, nationality = 'Brazilian' }) => `${firstName} is ${nationality}`;

const person = {
  firstName: 'João',
  lastName: 'Jr II',
};


const otherPerson = {
  firstName: 'Ivan',
  lastName: 'Ivanovich',
  nationality: 'Russian',
};

console.log(getNationality(otherPerson)); // Ivan is Russian
console.log(getNationality(person));
