// apiScript.js     
const API_URL = 'https://icanhazdadjoke.com/';


const fetchJoke = () => {
  // return new Promise((resolve, reject) => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => console.log(data.joke));
    // resolve()
  // })
};
const fraseJoke = document.getElementById('jokeContainer')
console.log(fraseJoke)
fraseJoke.innerHTML = 'oi'

window.onload = () => {
  fetchJoke()
};