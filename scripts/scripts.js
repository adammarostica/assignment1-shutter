function showMenu(e) {
  this.children[0].classList.toggle('change-top');
  this.children[1].classList.toggle('change-mid');
  this.children[2].classList.toggle('change-btm');
  menu.classList.toggle('showMenu');
  socials.classList.toggle('showMenu');
}

const menu = document.querySelector('.menu');
const socials = document.querySelector('.socialIcons');
const burger = document.querySelector('.burger-icon');
burger.addEventListener('click', showMenu);