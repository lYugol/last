const burgerMenu = document.querySelector('.burger-menu ');
const openBurgerMenu = document.querySelector('.header__burger-menu');
const closeBurgerMenu = document.querySelector('.header__left-close');


openBurgerMenu.addEventListener('click', function(evt){
        evt.preventDefault();
        burgerMenu.classList.add('burger-menu--open')
    });
    closeBurgerMenu.addEventListener('click', function(){
        burgerMenu.classList.remove('burger-menu--open')
    })