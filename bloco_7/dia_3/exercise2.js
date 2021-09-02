const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

const array = [1, 2, 3, 4]
myRemove(array, 3)
// implemente seus testes aqui
assert.deepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4])

assert.notDeepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4])

assert.deepEqual(array, [1, 2, 3, 4])

assert.deepEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4])
