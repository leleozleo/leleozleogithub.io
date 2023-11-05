//script.js
document.addEventListener("DOMContentLoaded", function () {
  const título = document.querySelector(".título");
  título.style.transform = "translateY(-100%)";
título.style.transition = "transform 1s ease";

  setTimeout(() => {
    título.style.transform = "translateX(0)";
  }, 100);
});