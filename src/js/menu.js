const burgerButton = document.querySelector('.nav__burger-link');
const closeButton = document.querySelector('.nav__menu-close');
const pageBody = document.querySelector('.page__body');
const pageMenu = document.querySelector('.page__menu');

burgerButton.addEventListener('click', () => {
  pageBody.classList.add('page__body--with-menu');
  pageMenu.classList.add('page__menu--visible');
});

closeButton.addEventListener('click', () => {
  pageBody.classList.remove('page__body--with-menu');
  pageMenu.classList.remove('page__menu--visible');
});

const cookiesBlock = document.querySelector('.accept-cookies');
const acceptButton = document.querySelector('.accept-cookies__action-button');

acceptButton.addEventListener('click', () => {
  cookiesBlock.classList.add('accept-cookies--fade-out');

  setTimeout(() => {
    cookiesBlock.style.display = 'none';
  }, 500);
});