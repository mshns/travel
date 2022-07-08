burgerButton = document.querySelector(".header-burgermenu-button");
burgerMenu = document.querySelector(".burgermenu");
menuClose = document.querySelector(".bergermenu-close");
menuShadow = document.querySelector(".menu-shadow");
menuItem = document.querySelectorAll(".burgermenu-item")

burgerButton.addEventListener('click',
  function() {
    burgerMenu.classList.add("active");
    menuShadow.classList.add("active");
  }
);

menuClose.addEventListener('click',
  function() {
    menuShadow.classList.remove("active");
    burgerMenu.classList.remove("active");
  }
);

menuShadow.addEventListener('click',
  function() {
    menuShadow.classList.remove("active");
    burgerMenu.classList.remove("active");
  }
);

menuItem.forEach((item) => {
    item.addEventListener('click',
      function() {
        menuShadow.classList.remove("active");
        burgerMenu.classList.remove("active");
      }
    )
  }
);