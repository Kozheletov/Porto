'use strict';

window.addEventListener('load', () => {
  const buttonMenu = document.querySelector('.button-menu');
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.header__nav');
  const header = document.querySelector('.header');
  const buttonGoTop = document.querySelector('.js-button-top');
  const navLinks = document.querySelectorAll('.header__nav-link');

  for (let navLink of navLinks) {
    navLink.addEventListener('click', (event) => {
      event.preventDefault();
      const location = navLink.dataset.scrollNav;
      const needSection = document.getElementById(location);
      needSection.scrollIntoView({behavior: 'smooth'});
    });
  }

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

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      buttonGoTop.classList.add('js-show-top-button');
    } else {
      buttonGoTop.classList.remove('js-show-top-button');
    }
  });

  buttonGoTop.addEventListener('click', (event) => {
    event.preventDefault();
    header.scrollIntoView({behavior: 'smooth'});
  });
});
