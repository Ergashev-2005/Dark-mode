const containerDiv = document.querySelector(".container");
const btnEl = document.querySelector(".btn");
const moonIcon = document.querySelector(".fa-moon");
const sunIcon = document.querySelector(".ri-sun-fill");

btnEl.addEventListener("click", () => {
  containerDiv.classList.toggle("color");
  btnEl.classList.toggle("btn-left");
  mp3.toggle("autoplay");
});