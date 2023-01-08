let hamburguer = document.querySelector(".hamburguer");
let closeMenu = document.querySelector(".close");
let menuItems = document.querySelector(".menu");
let checkBox = document.querySelector(".inputCheckBox");
let menu = document.querySelector(".hamburguerMenu");
let links = document.querySelectorAll("a");
let seta = document.querySelector('.seta')
let home = document.querySelector('#homeIcon')

seta.addEventListener('click', e => {
  home.classList.toggle('hidden')
})


function showMenu() {
  menu.addEventListener("click", (e) => {
    menuItems.classList.toggle("hidden");
    closeMenu.classList.toggle("hidden");
    hamburguer.classList.toggle("hidden");
  });
}

function hiddenMenu() {
  links.forEach((a) => {
    a.addEventListener("click", (e) => {
      

      if (!menuItems.classList.contains("hidden")) {
        menuItems.classList.toggle("hidden");
        closeMenu.classList.toggle("hidden");
        hamburguer.classList.toggle("hidden");
      }

      
    });
  });
}

function inicial() {
  showMenu();
  hiddenMenu();
}

inicial();
