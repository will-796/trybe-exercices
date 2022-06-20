
const API_URL = 'https://icanhazdadjoke.com/';

const createJoke = (data) => {
  const jokeContainer = document.querySelector('#jokeContainer')
  const div = document.createElement('div')
  div.innerHTML = data.joke
  jokeContainer.appendChild(div)
} 

const fetchJoke = () => {
  const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

  fetch(API_URL, myObject)
    .then(response => response.json())
    .then((data)=> createJoke(data))
    .then(data => console.log(data));
};


window.onload = () => fetchJoke();