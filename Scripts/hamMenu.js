// hamMenu.js
document.addEventListener('DOMContentLoaded', () => {
  const hamMenu = document.querySelector('.hamMenu');
  const offScreenMenu = document.querySelector('.offScreenMenu');

  if (hamMenu && offScreenMenu) {
    hamMenu.addEventListener('click', () => {
      hamMenu.classList.toggle('active');
      offScreenMenu.classList.toggle('active');
    });
  }
});