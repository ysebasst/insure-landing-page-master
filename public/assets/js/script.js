const btnToggleMenu = document.getElementById("btn-toggle-menu");
const navMenu = document.getElementById("nav-menu");

btnToggleMenu.addEventListener("click", () => {
  btnToggleMenu.classList.toggle("nav__toggle--icon-close");
  navMenu.classList.toggle("nav__menu--show");
});
