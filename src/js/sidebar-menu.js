// КНОПКА САЙДБАР МЕНЮ
let contentMenu = document.querySelector(".sidebar-header");
let openButtonMenu = document.querySelector(".button-menu--open");
let closeButtonMenu = document.querySelector(".button-menu--close");
let whiteBackground = document.querySelector(".background-white");

function closeMenu() {
  contentMenu.classList.remove("sidebar-header--open");
  whiteBackground.classList.remove("background-white--active");
  document.body.style.overflow = "";
}

openButtonMenu.addEventListener("click", function (evt) {
  contentMenu.classList.add("sidebar-header--open");
  whiteBackground.classList.add("background-white--active");
 document.body.style.overflow = "hidden";
});

closeButtonMenu.addEventListener("click", function (evt) {
  closeMenu();
});

whiteBackground.addEventListener("click", function (evt) {
  if (contentMenu.classList.contains("sidebar-header--open")) {
    closeMenu();
  }
});
