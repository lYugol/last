const popup = document.querySelector('.modal-call')
const openPopup = document.querySelectorAll('.button--show')
<<<<<<< HEAD
const closePopup = document.querySelector('.modal-call__header--close')
=======
const closePopup = document.querySelector('.modal__call--close')
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54
const popupBg = document.querySelector('.modal-call-bg')

for (let i = 0; i < openPopup.length; i++) {
  openPopup[i].addEventListener('click', function (evt) {
    evt.preventDefault()
<<<<<<< HEAD
    popup.classList.add('modal-call__header--open')
=======
    popup.classList.add('modal-call--open')
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54
    popupBg.classList.add('modal-call-bg--open')
  })
}

closePopup.addEventListener('click', function () {
<<<<<<< HEAD
  popup.classList.remove('modal-call__header--open')
=======
  popup.classList.remove('modal-call--open')
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54
  popupBg.classList.remove('modal-call-bg--open')
})

popup.addEventListener('click', function (evt) {
  if (evt.currentTarget === evt.target) {
    popupBg.classList.remove('modal-call-bg--open')
  }
})

popupBg.addEventListener('click', function (evt) {
  if (evt.currentTarget === evt.target) {
    popupBg.classList.remove('modal-call-bg--open')
  }
})

document.addEventListener('click', function (event) {
  console.log('Кликнули на элемент:', event.target)
})
<<<<<<< HEAD
=======
console.log('отработал_call')
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54
