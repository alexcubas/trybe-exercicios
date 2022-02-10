const fs = require('fs').promises

// const read = async () => {
//   fs.readFile('./simpsons.json', 'utf8', (err, data) => {
//     if(err) {
//       console.error(err)
//       return
//     }
//     console.log(data)
//   })
// }

// read()

// const chamada = () => {
//     fs.readFile('./simpsons.json', 'utf8')
//     .then((file) => JSON.parse(file))
//     .then((content) => content.forEach(({id, name}) => console.log(`${id}, ${name}`)))
//   }
//   data.forEach(({id, name}) => console.log(`${id}, ${name}`))

// chamada()

const chamada2 = async () => {
  const simp = await fs.readFile('./simpsons.json', 'utf8')
  // console.log(simp)
  const res = simp.JSON.parse(contente)
  const resultado = res.forEach(({id, name}) => console.log(`${id}, ${name}`))
  return resultado
}

chamada2()