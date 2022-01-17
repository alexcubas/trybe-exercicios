function multiples_of_3_or_5(roof) {
  // Write your code here
  const multiplosOf3 = []
  const multiplosOf5 = []
  for(let i = 1; i <= roof; i++) {
    multiplosOf3.push(3 * i)
    multiplosOf5.push(5 * i)
  }
  const totalmult = [...multiplosOf3, ...multiplosOf5]
  const mult = totalmult.filter((element) => element < roof)
  const novaMult = mult.filter((este, i) => {
    return mult.indexOf(este) === i;
  })
  const total = novaMult.reduce((acc, att) => acc + att)
  return total
}

console.log(multiples_of_3_or_5(31))
