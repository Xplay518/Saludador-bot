import saludar from "./saludador";

const name = document.querySelector("#user-name");
const form = document.querySelector("#askName-form");
const div = document.querySelector("#grettingsName-div");
const age = document.querySelector("#user-age")
const genero = document.querySelector("#gender")
const language = document.querySelector("#language")

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const userName = name.value;
  const userAge = parseInt(age.value);
  const userGenero = genero.value;
  const userLanguage = language.value;
  div.innerHTML = "<p>" + saludar(userName, userAge, userGenero, userLanguage) + "</p>";
});

