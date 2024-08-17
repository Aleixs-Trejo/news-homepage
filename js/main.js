document.addEventListener('DOMContentLoaded', function () {
  const $nav = document.querySelector('.nav');
  const $hamburger = document.querySelector('.nav__hamburger');
  const $imgHamuger = document.querySelector('.hamburger__img');
  const $menu = document.querySelector('.nav__menu');

  // Mostrar menú
  $hamburger.addEventListener('click', function () {
    $menu.classList.toggle('nav__menu--active');

    if ($menu.classList.contains('nav__menu--active')) {
      $imgHamuger.setAttribute('src', '../assets/images/icon-close.svg');
    } else {
      $imgHamuger.setAttribute('src', '../assets/images/icon-hamburger.svg');
    }
  });
});