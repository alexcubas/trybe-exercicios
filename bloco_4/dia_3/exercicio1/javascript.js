
//EXERCICIO 1

// n = 5
// let horizontal = "";

// for (let contador = 1; contador <= n; contador += 1) {
//   horizontal += "*" 
// }
// for (let contador = 1; contador <= n; contador += 1) {
//   console.log(horizontal)
// }

//EXERCICIO 1 MÉTODO DE RESOLUÇÃO 2
n = 5
let horizontal = "";
for (let contador = 1; contador <= n; contador += 1) {
  horizontal += "\n"
  for (let contador1 = 1; contador1 <= n; contador1 += 1) {
    horizontal += "*"
  }
} console.log(horizontal)


//EXERCICIO 2

// n = 5
// let horizontal = "";
// for (let contador = 1; contador <= n; contador += 1) {
//   horizontal += "*"
//   console.log(horizontal)
// }


//EXERCICIO 3

// n = 8;
// let symbol = "*";
// let line = "";
// let metragem = n;

// for (let linex = 1; linex <= n; linex += 1) {
//   for (let coluna = 1; coluna <= n; coluna += 1) {
//     if (coluna < metragem) {
//       line = line + " ";
//     } else {
//       line = line + symbol;
//     }
//   }
//   console.log(line);
//   line = "";
//   metragem -= 1;
// }

//EXERCICIO 4

// let linha = 3;
// let coluna = 5;
// let symbol = "*";
// let line = "";
// let metragem = coluna;

// for (let linha1 = 1; linha1 <= linha; linha1 += 1) {
//   for (let coluna1 = 1; coluna1 <= coluna; coluna1 += 1) {
//   if (coluna1 < metragem || coluna1 > metragem) {
//     line = line + " "
//   } else {
//     line = line + "*"
//   }
//   }
//   console.log(line);
//   line = "";
//   metragem -= 1;
// }
