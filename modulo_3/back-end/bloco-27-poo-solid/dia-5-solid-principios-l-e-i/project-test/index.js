const express = require('express');
global.fetch = require('node-fetch');

const app = express();

app.use(express.json());

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

// fetch('https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-12-2021')
//   .then(response => response.json())
//   .then(data => console.log(({cripto: data.id, usd: data.market_data.current_price.usd})))
//   .catch(err => console.error(err))

async function getBitCoin() {
  const url = 'https://api.coingecko.com/api/v3/coins/bitcoin/history?date=30-12-2021';
  try {
    const res = await fetch(url);
    data = await res.json();
    console.log({ cripto: data.id, usd: data.market_data.current_price.usd });
  } catch (error) {
    console.log(error);
  }
}

getBitCoin()

app.get('/bitcoin');

app.get('/test', function (req, res) {
  res.status(200).json(recipes);
})

app.listen(3000, () => {
  console.log(`ligando`);
})