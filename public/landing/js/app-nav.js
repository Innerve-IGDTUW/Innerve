const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container-main");
const links = document.querySelector(".links");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
  links.classList.toggle("hello");
});
