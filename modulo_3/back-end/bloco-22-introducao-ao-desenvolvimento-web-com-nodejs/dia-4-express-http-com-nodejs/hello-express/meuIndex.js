/* index.js */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())

const drinks = [
  { id: 1, name: 'Refrigerante Lata', price: 5.0 },
  { id: 2, name: 'Refrigerante 600ml', price: 8.0 },
  { id: 3, name: 'Suco 300ml', price: 4.0 },
  { id: 4, name: 'Suco 1l', price: 10.0 },
  { id: 5, name: 'Cerveja Lata', price: 4.5 },
  { id: 6, name: 'Agua Mineral 500 ml', price: 5.0 },
];

const recipes = [
  { id: 1, name: 'Lasanha', price: 40.0, waitTime: 30 },
  { id: 2, name: 'Macarrão a Bolonhesa', price: 35.0, waitTime: 25 },
  { id: 3, name: 'Macarrão com molho branco', price: 35.0, waitTime: 25 },
];

app.put('/drinks/:id', function (req, res) {
  const { id } = req.params
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if(drinkIndex === -1) return res.status(404).json({ message: 'Recipe not found' })

  drinks[drinkIndex] = {...drinks[drinkIndex], name, price};
  res.status(204).end();
});

app.delete('/drinks/:id', function (req, res) {
  const { id } = req.params
  const { name, price } = req.body;
  const drinkIndex = drinks.findIndex((r) => r.id === parseInt(id));

  if(drinkIndex === -1) return res.status(404).json({ message: 'Recipe not found' })

  drinks.splice(drinkIndex, 1)
  res.status(204).end();
});

app.post('/drinks', function (req, res) {
  const { id, name, price, waitTime } = req.body;
  drinks.push({ id, name, price, waitTime});
  res.status(201).json({ message: 'drinks created successfully!'});
});

app.get('/drinks/search', function (req, res) {
  const { name } = req.query;
  const filteredDrinks = drinks.filter((r) => r.name.includes(name));
  res.status(200).json(filteredDrinks);
})

app.get('/drinks/:id', function (req, res) {
  const { id } = req.params
  const drink = drinks.find((d) => d.id === parseInt(id))
  if (!drink) return res.status(404).json({ message: 'not found' })
  
  res.json(drink);
})

app.get('/drinks', function (req, res) {
  drinks.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  
  res.json(drinks);
})

app.get('/recipes', function (req, res) {
  recipes.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  res.json(recipes);
});

app.get('/recipes/search', function (req, res) {
  const { name } = req.query;
  const filteredRecipes = recipes.filter((r) => r.name.includes(name));
  res.status(200).json(filteredRecipes);
});


app.get('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipe = recipes.find((r) => r.id === parseInt(id));

  if (!recipe) return res.status(404).json({ message: 'Recipe not found!'});

  res.status(200).json(recipe);
});

// ...
app.post('/recipes', function (req, res) {
  const { id, name, price } = req.body;
  recipes.push({ id, name, price});
  res.status(201).json({ message: 'Recipe created successfully!'});
});

//...

app.delete('/recipes/:id', function (req, res) {
  const { id } = req.params;
  const recipeIndex = recipes.findIndex((r) => r.id === parseInt(id));

  if (recipeIndex === -1) return res.status(404).json({ message: 'Recipe not found!' });

  recipes.splice(recipeIndex, 1);

  res.status(204).end();
});


app.listen(3005, () => {
  console.log('Aplicação ouvindo na porta 3005');
});