burgerButton = document.querySelector(".header-burgermenu-button");
burgerMenu = document.querySelector(".burgermenu");
menuClose = document.querySelector(".bergermenu-close");
menuShadow = document.querySelector(".menu-shadow");
menuItem = document.querySelectorAll(".menu-link");
loginButton = document.querySelector(".header-login-button");
accountLink = document.querySelector(".account-link");
logIn = document.querySelector(".login-container");
registerLink = document.querySelector(".register");
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
    logIn.style.transition = '';
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

let popup = 'register';
registerLink.addEventListener('click',
  function() {
    if (popup === 'register') {      
      logIn.style.transition = 'none';
      logIn.classList.add("signin");
      document.querySelector('.login-title').textContent = "Create account";
      document.querySelector('.signin-buttons').style.display = "none";
      signInButton.textContent = "Sign Up";
      document.querySelector('.login-forgot-password').style.display = "none";
      document.querySelector('.link-description').textContent = "Already have an account? ";
      registerLink.textContent = "Log in";
      document.querySelector('.login-input').style.marginTop = "8px";
      document.querySelector('.separator').style.marginTop = "14px";
      popup = 'logIn';
    } else {
      logIn.style.transition = 'none';
      logIn.classList.remove("signin");
      document.querySelector('.login-container').style.height = "";
      document.querySelector('.login-title').textContent = "Log in to your account";
      document.querySelector('.signin-buttons').style.display = "flex";
      signInButton.textContent = "Sign In";
      document.querySelector('.login-forgot-password').style.display = "contents";
      document.querySelector('.link-description').textContent = "Don’t have an account? ";
      registerLink.textContent = "Register";
      document.querySelector('.login-input').style.marginTop = "";
      document.querySelector('.separator').style.marginTop = "";
      popup = 'register';
    }
  }
);

signInButton.addEventListener('click',
  function() {
    alert(`◼️ E-mail: ${logPass[0].value}\n◼️ Password: ${logPass[1].value}`);
  }
);