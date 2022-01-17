function count_down(x) {
  // Write your code here
  let arrayNumber = [`${x}`]
  for(let i = 1; i <= x; i++) {
      arrayNumber.push(`${x - i}`) 
  }
  const result = arrayNumber.toString()
  const result2 = result.replace(/,/g, "...")
  const final = '!!!'
  const result3 = result2 + final
  return result3
}

console.log(count_down(10))