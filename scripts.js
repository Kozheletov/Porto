'use strict';

window.addEventListener('load', () => {
  const buttonMenu = document.querySelector('.button-menu');
  const burgerMenu = document.querySelector('.burger-menu');
  const nav = document.querySelector('.header__nav');
  const header = document.querySelector('.header');
  const buttonGoTop = document.querySelector('.js-button-top');
  const navLinks = document.querySelectorAll('.header__nav-link');
  const scrollButtonArea = document.querySelector('.scroll-area');
  const scrollElements = document.querySelectorAll('.scroll-element');
  const scrollButtons = document.querySelectorAll('.scroll-area__button');

  const scrollButtonState = () => {
    for (const scrollElement of scrollElements) {
      const elementTopLine = scrollElement.offsetTop - 10;
      const elementBottomLine = scrollElement.offsetTop + scrollElement.offsetHeight;
      const currentScroll = window.pageYOffset;
      if (currentScroll >= elementTopLine && currentScroll < elementBottomLine) {
        for (const scrollButton of scrollButtons) {
          scrollButton.classList.remove('scroll-area__button_selected');
        }
        scrollButtons[scrollElement.dataset['scrollPosition']].classList.add('scroll-area__button_selected');
      }
    }
  };

  scrollButtonState();

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

    scrollButtonState();
  });

  buttonGoTop.addEventListener('click', (event) => {
    event.preventDefault();
    header.scrollIntoView({behavior: 'smooth'});
  });

  scrollButtonArea.addEventListener('click', (event) => {
    const currentTarget = event.target;

    if (currentTarget.tagName !== 'BUTTON') {
      return;
    }

    const scrollElement = scrollElements[currentTarget.dataset['scrollButton']];
    scrollElement.scrollIntoView({behavior: 'smooth'});

    for (const scrollButton of scrollButtons) {
      scrollButton.classList.remove('scroll-area__button_selected');
    }

    currentTarget.classList.add('scroll-area__button_selected');
  });
});
