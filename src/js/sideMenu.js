const burgerMenu = document.querySelector('.btn_burger');
const dropDown = document.querySelector('.sideMenu-container');
const menuClose = document.querySelector('.btn_burger_close ');
const headerContainer = document.querySelector('.header');
const mainContainer = document.querySelector('.main');
const appWidth = window.innerWidth;

burgerMenu.addEventListener('click', () => {
  dropDown.classList.add('sideMenu--active');
  headerContainer.classList.toggle('content-blur');
  mainContainer.classList.toggle('content-blur');
});

menuClose.addEventListener('click', () => {
  dropDown.classList.remove('sideMenu--active');
  headerContainer.classList.toggle('content-blur');
  mainContainer.classList.toggle('content-blur');
});

mainContainer.addEventListener('click', () => {
  if (appWidth < 1440) {
    dropDown.classList.remove('sideMenu--active');
    headerContainer.classList.toggle('content-blur');
    mainContainer.classList.toggle('content-blur');
  }
});