// const repeat = (number, action) => {
//   for (let count = 0; count <= number; count += 1) {
//     action(count);
//   }
// };

// const isEven = (number) => {
//   if (number % 2 === 0) {
//     console.log(number, 'is even');
//   }
// };

// const isOdd = (number) => {
//   if ((number % 2) > 0) {
//     console.log(number, 'is odd');
//   }
// };

// repeat(7, isEven); // Testa quais números serão pares;
// repeat(7, isOdd); // Testa quais números serão ímpares;

// const numberGenerator = () => {
//   let conta = Math.random() * 100;
//   return Math.round(conta)
//   return Math.floor(conta)
// }

// console.log(numberGenerator());

const acordando = () => `Acordando!!`;

const cafe = () => `Bora tomar café!!`;

const dormir = () => `Partiu dormir!!`;

const doingThings = (func) => func();

console.log(doingThings(acordando));
console.log(doingThings(cafe));
console.log(doingThings(dormir));