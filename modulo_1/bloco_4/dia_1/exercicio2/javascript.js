//EXERCICIO 1

// let adição = 4 + 5
// let subtração = 4 - 5
// let multiplicação = 4 * 5
// let divisão = 4 / 5
// let módulo = 4 % 5

// console.log (adição, subtração, multiplicação, divisão, módulo)

//EXERCICIO 2

// let num1 = 55
// let num2 = 32

// if (num1 < num2) {
//     console.log("num2 é maior")
// } else {
//     console.log("num1 é maior")
// }

//EXERCICIO 3

// let firstN = 45
// let secondN = 23
// let thirdN = 66

// if (firstN > secondN && firstN > thirdN) {
//     console.log("firstN é maior")
// } else if (secondN > firstN && secondN > thirdN) {
//     console.log("secondN é maior")
// } else {
//         console.log("thirdN é maior")
//     }

//EXERCICIO 4

// let num = 0

// if (num > 0) {
//     console.log("positive")
// } else if (num < 0) {
//     console.log("negative")
// } else {
//     console.log("zero")
// }

//EXERCICIO 5

// let tri1 = 60;
// let tri2 = 50;
// let tri3 = 660;

// if (tri1 && tri2 && tri3 < 0) {
//     console.log("Valor inválido")
// } else if (tri1 + tri2 + tri3 === 180) {
//     console.log(true)
// } else {
//     console.log("error, false")
// }

//EXERCICIO 6

// let peçaXadrez = "Rainha";
// peçaXadrez = peçaXadrez.toLowerCase();
// switch (peçaXadrez) {
//     case "peões":
//      console.log("os peões só podem se mover para frente")
//       break;
//     case "cavalo":
//      console.log("se movel em L")
//      break;
//     case "torre":
//       console.log("se movimenta em linha reta, para frente ou para o lado")
//       break;
//     case "bispo":
//       console.log("se movimentam na diagonal")
//       break;
//     case "rei":
//       console.log("se movimenta uma cassa por vez em qualquer direção")
//       break;
//     case "rainha":
//       console.log("consegue mover-se em diversas direções, é uma espécie de junção dos movimentos do bispo e da torre")
//       break;
//     default:
//       console.log("ERRO peça nao identificada")    
//       break;    
// }

//EXERCICIO 7

// let notaDada = -70;
// // notaDada += "%"

// if (notaDada < 0 || notaDada > 100) {
//   console.log("ERRO!!! Nota errada")
// } else if (notaDada >= 90) {
//   console.log("A")
// } else if (notaDada >= 80) {
//   console.log("B")
// } else if (notaDada >= 70) {
//   console.log("C")
// } else if (notaDada >= 60) {
//   console.log("D")
// } else if (notaDada >= 50) {
//   console.log("E")
// } else {
//   console.log("F")
// }

//EXERCICIO 8

// let number1 = 71;
// let number2 = 55;
// let number3 = 44;

// let resultado = false;

// // cria um let "resultado" = false; nao precisando usar o else

// if (number1 %2 == 0 || number2 %2 == 0 || number3 %2 == 0) {
//   resultado = true;
// } console.log(resultado)

//EXERCICIO 9

// let number1 = 72;
// let number2 = 54;
// let number3 = 44;

// let resultado = false;

// // cria um let "resultado" = false; nao precisando usar o else

// if (number1 %2 != 0 || number2 %2 != 0 || number3 %2 != 0) {
//   resultado = true;
// } console.log(resultado)

//EXERCICIO 10

// let custo = 12;
// let venda = 15;
// let imposto = 1.2; // 20/100
// let lucro = 0;

// if (custo < 0 || venda < 0) {
//   console.log("ERRO, numero negativo")
// } else {
//   let valorCustoTotal = custo * imposto;  //(custo * imposto);

//   lucro = venda - valorCustoTotal;

//   lucroMilVendas = lucro * 1000;

//   console.log(lucroMilVendas)
// }

// // if (custo < 0 || venda < 0) {
// //   console.log("ERRO, numero negativo")
// // } else {
// //   console.log(lucroMilVendas)
// // } 

//EXERCICIO 11

// let salarioBruto = 3000;

// let aliquotaINSS1 = 0.92;
// let aliquotaINSS2 = 0.91;
// let aliquotaINSS3 = 0.89;
// let aliquotaINSS4 = 570.88;

// let salarioMenosINSS = 0;

// let ir1 = 0.925;
// let ir2 = 0.85;
// let ir3 = 0.775;
// let ir4 = 0.725;

// if (salarioBruto <= 1556.94) {
//   salarioBruto = salarioBruto * aliquotaINSS1
//   //console.log("faixa1", salarioBruto)
// } else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
//   salarioBruto = salarioBruto * aliquotaINSS2
//   //console.log("faixa2", salarioBruto)
// } else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
//   salarioBruto = salarioBruto * aliquotaINSS3
//   //console.log("faixa3", salarioBruto)
// } else {
//   salarioBruto = salarioBruto - aliquotaINSS4
//   //console.log("faixa4", salarioBruto)
// }

// if (salarioBruto <= 1903.98) {
//   salarioMenosINSS = salarioBruto
// } else if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {
//   salarioMenosINSS = (salarioBruto * ir1) + 142.80
// } else if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {
//   salarioMenosINSS = (salarioBruto * ir2) + 354.80
// } else if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {
//   salarioMenosINSS = (salarioBruto * ir3) + 636.13
// } else {
//   salarioMenosINSS = (salarioBruto * ir4) + 869.36
// }

// console.log(salarioMenosINSS)
