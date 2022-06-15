const colorChanger = document.querySelector("#light");
const originalColor = document.querySelector("#dark");

function newColor() {
  const navBar = document.querySelector("nav");
  const Tecnical = document.querySelector("#tecnical");
  //   navBar.setAttribute("sty", "navbar navbar-expand-lg navbar- bg-danger");
  //   navBar.style.backgroundColor = "#804040d8";
  document.body.classList.add("active-bg");
  Tecnical.setAttribute("style", "font-weight: 800; color: rgb(255, 30, 255);");
  const carousel = document.querySelector("#carouselExampleControls");
  carousel.style.backgroundColor = "rgba(254, 245, 237, 0.544)";

  const footer = document.querySelector(".footer");
  footer.style.backgroundColor = "rgba(83, 53, 53, 0.767)";
}
function resetColor() {
  const navBar = document.querySelector("nav");
  const Tecnical = document.querySelector("#tecnical");
  //   navBar.style.backgroundColor = "black";
  document.body.classList.remove("active-bg");
  Tecnical.setAttribute("style", "font-weight: bold; color : aqua");
  const carousel = document.querySelector("#carouselExampleControls");
  carousel.style.backgroundColor = "rgba(32, 32, 32, 0.849)";
  const footer = document.querySelector(".footer");
  footer.style.backgroundColor = "rgba(26, 24, 24, 0.774)";
}

colorChanger.addEventListener("click", () => {
  newColor();
});
originalColor.addEventListener("click", () => {
  resetColor();
});
