// const numbers = [32, 15, 3, 2, -5, 56, 10];

// const sumNumbers = numbers.reduce((result, number) => result + number); // O parâmetro `result` é o acumulador. Ele recebe, do `reduce`, o retorno da função a cada iteração.
// console.log(sumNumbers); // 113

// // Ou seja:

// const getSum = (result, number) => result + number;
// const sumNumbers = numbers.reduce(getSum);
// console.log(sumNumbers); // 113

// const numbers = [32, 15, 3, 22, -5, 56, 100];
// let maiorN = 0;

// for (let i = 0; i <= numbers.length; i += 1) {
//   if (maiorN < numbers[i]) {
//     maiorN = numbers[i]
//   }
// }

// console.log(maiorN)

// const biggerN = numbers.reduce((result, number) => result <= number ? number : result)

// console.log(biggerN)

const numbers = [15, 19, 23, 53, 4, 5, 16, 23, 54];

// const filtroN = numbers.filter((element) => element % 2 === 0)

// const soma = filtroN.reduce((result, num) => result + num)

// console.log(filtroN)
// console.log(soma)

const soma = numbers.reduce((result, num) => (num % 2 === 0) ? result + num : result)

console.log(soma)

const estudantes = [
  {
    nome: 'Jorge',
    sobrenome: 'Silva',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 67 },
      { name: 'Português', nota: 79 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 65 },
    ],
  },
  {
    nome: 'Mario',
    sobrenome: 'Ferreira',
    idade: 15,
    turno: 'Tarde',
    materias: [
      { name: 'Matemática', nota: 59 },
      { name: 'Português', nota: 80 },
      { name: 'Química', nota: 78 },
      { name: 'Biologia', nota: 92 },
    ],
  },
  {
    nome: 'Jorge',
    sobrenome: 'Santos',
    idade: 15,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 76 },
      { name: 'Português', nota: 90 },
      { name: 'Química', nota: 70 },
      { name: 'Biologia', nota: 80 },
    ],
  },
  {
    nome: 'Maria',
    sobrenome: 'Silveira',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 91 },
      { name: 'Português', nota: 85 },
      { name: 'Química', nota: 92 },
      { name: 'Biologia', nota: 90 },
    ],
  },
  {
    nome: 'Natalia',
    sobrenome: 'Castro',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 70 },
      { name: 'Português', nota: 70 },
      { name: 'Química', nota: 60 },
      { name: 'Biologia', nota: 50 },
    ],
  },
  {
    nome: 'Wilson',
    sobrenome: 'Martins',
    idade: 14,
    turno: 'Manhã',
    materias: [
      { name: 'Matemática', nota: 80 },
      { name: 'Português', nota: 82 },
      { name: 'Química', nota: 79 },
      { name: 'Biologia', nota: 75 },
    ],
  },
];

[
  { name: 'Jorge', materia: 'Português' },
  { name: 'Mario', materia: 'Biologia' },
  { name: 'Jorge', materia: 'Português' },
  { name: 'Maria', materia: 'Química' },
  { name: 'Natalia', materia: 'Português' },
  { name: 'Wilson', materia: 'Português' },
]

// const bestMatterOfStudents = estudantes.map((element) => {
//   const bestMatter = estudantes.reduce((result, num) => (num.materias.nota > result.materias.nota) ? num : result)
//  return {
//    name: element.nome,
//    materia: bestMatter.materias.name
//  }
// })

// console.log(bestMatterOfStudents)

const bestMatterOfStudents = estudantes.map((element) => {
  const bestMatter = ((result, num) => (num.nota > result.nota) ? num : result)
 return {
   name: element.nome,
   materia: element.materias.reduce(bestMatter).name
 }
})

console.log(bestMatterOfStudents)