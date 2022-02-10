function calculo(a, b, c) {
  const promise = new Promise((resolve, reject) => {
    if (typeof a != 'number' || typeof b != "number" || typeof c != "number") {
      reject(new Error('Informe apenas números'));
    }
    const calc = (a + b) * c;

    if (calc < 50) reject(new Error('Valor muito baixo'));

    resolve(calc);
  })
  return promise;
}

const calculoPromise = () => {
  return Math.floor(Math.random() * 100 + 1);
}

const chamada = async () => {
  const randomNumber = Array.from({ length: 3 }).map(calculoPromise);

  try {
    const res = await calculo(...randomNumber);
    console.log(res) 
  } catch(err) {
    console.log(err) 
  }
}

chamada()
  
