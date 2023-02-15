const hamburgerButton = document.querySelector('.hamburger-button');

hamburgerButton.addEventListener('click', () => {
  hamburgerButton.classList.toggle('active');
});
const menu = document.querySelector('.menu');

hamburgerButton.addEventListener('click', () => {
  
  menu.classList.toggle('active');
});
