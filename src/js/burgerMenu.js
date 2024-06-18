const burgerMenu = document.querySelector('.burger-menu')
<<<<<<< HEAD
const openBurgerMenu = document.querySelector('.service__header-burger-menu')
=======
const openBurgerMenu = document.querySelector('.header__burger-menu')
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54
const closeBurgerMenu = document.querySelector('.header__left--close')
const burgerMenuBg = document.querySelector('.burger-menu-bg')

openBurgerMenu.addEventListener('click', function (evt) {
  evt.preventDefault()
  burgerMenu.classList.add('burger-menu--open')
  burgerMenuBg.classList.add('burger-menu-bg--open')
})

closeBurgerMenu.addEventListener('click', function () {
  burgerMenu.classList.remove('burger-menu--open')
  burgerMenuBg.classList.remove('burger-menu-bg--open')
})

burgerMenuBg.addEventListener('click', function (evt) {
  if (evt.currentTarget === evt.target) {
    burgerMenuBg.classList.remove('burger-menu-bg--open')
  }
})
<<<<<<< HEAD
=======
console.log('отработал_bg')
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54
