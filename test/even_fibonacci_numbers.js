function even_fibonacci_numbers(roof) {
  // Write your code here
const valoresFibo = [1, 2]
for(let i = 0; i <= roof; i++) {
  let ultimo = valoresFibo[valoresFibo.length-1]
  let penultimo = valoresFibo[valoresFibo.length-2]
  valoresFibo.push(ultimo + penultimo)
}
const filtrandoValor = valoresFibo.filter((element) => element <= roof)
const pegandoPar = filtrandoValor.filter((element) => element % 2 == 0)
const result = pegandoPar.reduce((crr, att) => crr + att)
return result
}

console.log(even_fibonacci_numbers(100))