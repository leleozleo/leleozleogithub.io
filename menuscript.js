//script.js
document.addEventListener("DOMContentLoaded", function () {
  const menu = document.querySelector(".menu");
  menu.style.transform = "translateY(-100%)";
  menu.style.transition = "transform 1s ease";

  setTimeout(() => {
    menu.style.transform = "translateX(0)";
  }, 100);
});