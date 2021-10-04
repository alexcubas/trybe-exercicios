const sum = require('./sum')

test('sums two values', () => {
  expect(sum(2, 4)).toEqual(8);
});