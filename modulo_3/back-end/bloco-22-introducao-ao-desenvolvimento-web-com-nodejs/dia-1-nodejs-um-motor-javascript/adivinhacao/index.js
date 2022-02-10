const readline = require('readline-sync');
// const numero = require('./questions');
const sorteio = require('./sorteio');

const resultado = () => {
  const numero = readline.questionInt('Escolha um numero de 0 a 10: ');
  const res = sorteio()
  if(numero === res) {
    console.log(`Parabéns, número correto!`)
  } else {
    console.log(`Opa, não foi dessa vez. O número era ${res}`)

  if (readline.keyInYN('Jogar novamente?')) {
      return resultado();
    } else {
      return
    }
  }
}

resultado()

// const jogarNovamente = () => {
//   if (readline.keyInYN('Jogar novamente?')) {
//     return resultado();
//   } else {
//     return ""
//   }
// }

// jogarNovamente()

// console.log(`voce escolheu ${numero}, o numero sorteado foi ${sorteio()}`)