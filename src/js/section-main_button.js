// КНОПКА 1 (в секции мейн)
let allContentButtonMain = document.querySelector(".main-container__text");
let openButtonMain = document.querySelector(".main-container__read-more-button");
let textButtonMain = document.querySelector(".main-container__button-text");
let svgArrowsMain = document.querySelector(".main-container__button-svg-arrows");
let checkMain = false;

openButtonMain.addEventListener("click", function (evt) {
  if (!checkMain) {
    allContentButtonMain.style.height = allContentButtonMain.scrollHeight + "px";
    textButtonMain.textContent = "Скрыть";
    svgArrowsMain.classList.add("main-container__button-svg-arrows--hide");
    checkMain = true;
  } else {
    allContentButtonMain.style.height = "134.5px";
    textButtonMain.textContent = "Читать далее";
    checkMain = false;
    svgArrowsMain.classList.remove("main-container__button-svg-arrows--hide");
  }
});
