document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.navbar__burger');
    const menu = document.querySelector('.navbar__menu');
  
    burger.addEventListener('click', () => {
      burger.classList.toggle('active'); // Меняем иконку
      menu.classList.toggle('active');  // Показываем/скрываем меню
    });
  });
  