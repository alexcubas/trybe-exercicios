// // const asyncSum = (a, b, callback) => {
// //   setTimeout(() => {
// //     const result = a + b;
// //     callback(result);
// //   }, 500);
// // };

// // test('Testando asyncSum, soma 5 mais 10', (done) => {
// //   asyncSum(5, 10, (result) => {
// //     try {
// //       expect(result).toBe(15);
// //       done();
// //     } catch (error) {
// //       done(error);
// //     }
// //   });
// // });

// const Animals = [
//   { name: 'Dorminhoco', age: 1, type: 'Dog' },
//   { name: 'Soneca', age: 2, type: 'Dog' },
//   { name: 'Preguiça', age: 5, type: 'Xabu' },
// ];

// const findAnimalsByType = (type) => (
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const arrayAnimals = Animals.filter((animal) => animal.type === type);

//       if (arrayAnimals.length !== 0) {
//         return resolve(arrayAnimals);
//       }

//       return reject(new Error('Não possui esse tipo de animal.'));
//     }, 100);
//   })
// );

// describe('Testando Async/Await - findAnimalsByType', () => {
//   describe('Quando o tipo do animal existe', () => {
//     test('Retorne a lista de animais', async () => {
//       await expect(findAnimalsByType('Dog')).resolves.toEqual([
//         { name: 'Dorminhoco', age: 1, type: 'Dog' },
//         { name: 'Soneca', age: 2, type: 'Dog' },
//       ]);
//     });
//   });

//   describe('Quando o tipo de animal não existe', () => {
//     test('Retorna um erro', async () => {
//       expect.assertions(1);
//       await expect(findAnimalsByType('Lion')).rejects
//         .toEqual(new Error('Não possui esse tipo de animal.'));
//     });
//   });
// });