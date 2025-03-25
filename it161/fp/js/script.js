document.addEventListener("DOMContentLoaded", function () {
  const burger = document.querySelector(".hamburger");
  const menu = document.querySelector(".menu");

  burger.addEventListener("click", function () {
    burger.classList.toggle("is-active");
    menu.classList.toggle("active");
  });
}); 