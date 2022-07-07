// apiScript.js
const API_URL = "https://icanhazdadjoke.com/";
const joke = document.getElementById("jokeContainer");

const fetchJoke = () => {
  const parameters = {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  };

  fetch(API_URL, parameters)
    .then((response) => response.json())
    .then((data) => (joke.innerHTML = data.joke))
    .catch((error) => (joke.innerHTML = error));
};

window.onload = () => fetchJoke();
