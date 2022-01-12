'use strict';

const buttonMenu = document.querySelector('.button-menu');
const burgerMenu = document.querySelector('.burger-menu');
const nav = document.querySelector('.header__nav');

buttonMenu.addEventListener('click', () => {
  if (burgerMenu.dataset.click === 'show') {
    burgerMenu.dataset.click = 'hide';
    nav.classList.add('hide');
    nav.classList.remove('show');
  } else {
    burgerMenu.dataset.click = 'show';
    nav.classList.remove('hide');
    nav.classList.add('show');
  }
});
