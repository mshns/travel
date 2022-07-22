burgerButton = document.querySelector(".header-burgermenu-button");
burgerMenu = document.querySelector(".burgermenu");
menuClose = document.querySelector(".bergermenu-close");
menuShadow = document.querySelector(".menu-shadow");
menuItem = document.querySelectorAll(".menu-link");

loginButton = document.querySelector(".header-login-button");
accountLink = document.querySelector(".account-link");
logIn = document.querySelector(".login-container");

registerLink = document.querySelector(".register");
signUp = document.querySelector(".sign-container");

loginLink = document.querySelector(".login-link");

signInButton = document.querySelector(".login-signin-button");
logPass = document.querySelectorAll(".login-input-box");

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
    logIn.classList.remove("active");
    signUp.classList.remove("active");
    logIn.style.transition = '';
    signUp.style.transition = '';

  }
);

menuItem.forEach((item) => {
    item.addEventListener('click',
      function() {
        burgerMenu.classList.remove("active");
        menuShadow.classList.remove("active");
      }
    )
  }
);

loginButton.addEventListener('click',
  function() {
    logIn.classList.add("active");
    menuShadow.classList.add("active");
  }
);

accountLink.addEventListener('click',
  function() {    
    burgerMenu.classList.remove("active");
    logIn.classList.add("active");
  }
);

registerLink.addEventListener('click',
  function() {
    logIn.style.transition = 'none';
    signUp.style.transition = 'none';
    logIn.classList.remove("active");
    signUp.classList.add("active");
  }
);

loginLink.addEventListener('click',
  function() {
    signUp.classList.remove("active");
    logIn.classList.add("active");
  }
);

signInButton.addEventListener('click',
  function() {
    alert(`E-mail: ${logPass[0].value}\nPassword: ${logPass[1].value}`);
  }
);