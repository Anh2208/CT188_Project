const homeLink = document.querySelector("#home-link");
const navTexts = document.querySelectorAll(".nav-text");
const navImgs = document.querySelectorAll(".nav-img");
const col = document.querySelector(".col-sm-2");

homeLink.addEventListener("click", () => {
  navTexts.forEach((navText) => {
    navText.classList.toggle("hidden");
  });
  navImgs.forEach((navImg) => {
    navImg.classList.toggle("hidden");
  });
  col.classList.toggle("col-sm-2");
  col.classList.toggle("col-sm-1");
  col.nextElementSibling.classList.toggle("col-sm-10");
  col.nextElementSibling.classList.toggle("col-sm-11");
});
