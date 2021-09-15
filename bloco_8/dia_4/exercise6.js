const assert = require('assert');

const students = ['Pedro Henrique', 'Miguel', 'Maria Clara'];
const grades = [[9, 8, 10, 7, 5], [10, 9, 9, 10, 8], [10, 7, 10, 8, 9]];

function studentAverage() {
  const mapeando = students.map((element, index) => {
    return {
      name: element,
      average: grades[index].reduce((res, elem) => (res + elem))
    }
  })
  // const averages = mapeando.reduce((result, elem) => {
  //   return (result + elem.average)
  // }, 0)
  return mapeando
}

console.log(studentAverage())

const expected = [
  { name: 'Pedro Henrique', average: 7.8 },
  { name: 'Miguel', average: 9.2 },
  { name: 'Maria Clara', average: 8.8 },
];

// assert.deepStrictEqual(studentAverage(), expected);