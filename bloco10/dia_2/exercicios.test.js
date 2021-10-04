const uppercase = require('./exercicios')

test('transforma as letras de uma palavra em letras maiúsculas', (a) => {
  uppercase('b', str => {
    try {
      expect(str).toBe('B');
      a();
    } catch (error) {
      a(error);
    }
  })
  // callback = (data) => {
  //   expect(uppercase('a', data)).toBe('A');
  //   done();
  // }
  // uppercase('a', callback);
})