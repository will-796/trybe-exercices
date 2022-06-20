const url = "https://icanhazdadjoke.com/";

const myObject = {
  method: "GET",
  headers: { Accept: "application/json" },
};

const createDivJoke = (data) => {
  const body = document.querySelector('body')
  const joke = data
  const div = document.createElement('div')
  div.innerHTML = joke
  body.appendChild(div)
}

const fetchjoke = async () => {
  try {
    createDivJoke('carregando coisa bonita')
    const response = await fetch(url, myObject);
    const data = await response.json();
    document.querySelector('body').innerHTML = ''
    createDivJoke(data.joke);
  } catch (error) {
    return console.log(error);
  }
};

window.onload = () => fetchjoke()