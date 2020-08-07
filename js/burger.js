'use strict';

(function () {
    let burger = document.querySelector(".burger__button");
    let navMenu = document.querySelector('nav');
    let bgMenu = document.querySelector(".bg-nav");
    burger.addEventListener("click", (e) => {
      e.preventDefault();
      burger.classList.toggle("open");
      navMenu.classList.toggle("open-nav");
      bgMenu.classList.toggle("hidden");
    });
})();