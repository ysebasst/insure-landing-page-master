const $size = document.querySelector(".size");
$size.style =
  "z-index:100;position: absolute; top: 1rem; left: 1rem; font-size: 1.5rem; font-weight: bold";

setInterval(() => {
  $size.textContent = window.visualViewport.width;
}, 1000);

const btnToggleMenu = document.getElementById("btn-toggle-menu");
const navMenu = document.getElementById("nav-menu");

btnToggleMenu.addEventListener("click", () => {
  btnToggleMenu.classList.toggle("nav__toggle--icon-close");
  navMenu.classList.toggle("nav__menu--show");
});
