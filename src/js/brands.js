// КНОПКА 2 (в секции брендов)
let allContentButtonBrands = document.querySelector(".slider-1");
let openButtonBrands = document.querySelector(".section-brands__button-all");
let textButtonBrands = document.querySelector(".brands-button__text");
let svgArrowsBrands = document.querySelector(".brands-button__svg-arrow");
let checkBrands = false;

openButtonBrands.addEventListener("click", function (evt) {
  if (!checkBrands) {
    allContentButtonBrands.style.height = allContentButtonBrands.scrollHeight + "px";
    textButtonBrands.textContent = "Скрыть";
    svgArrowsBrands.classList.add("brands-button__svg-arrow--hide");
    checkBrands = true;
  } else {
    allContentButtonBrands.style.height = "164px";
    textButtonBrands.textContent = "Показать все";
    checkBrands = false;
    svgArrowsBrands.classList.remove("brands-button__svg-arrow--hide");
  }
});
