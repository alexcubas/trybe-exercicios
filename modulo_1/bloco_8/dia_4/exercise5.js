const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

function containsA() {
//   const inMap = names.join('').split('').map((elem) => {
//   return elem.toLocaleLowerCase()
// })
//   const inReduce = inMap.reduce((result, elementWhithA) => {
//     return (elementWhithA === 'a') ? result + 1 : result
//   }, 0)

return names.join('').toLowerCase().split('a').length - 1;
 
}
console.log(containsA())
// assert.deepStrictEqual(containsA(), 20);
