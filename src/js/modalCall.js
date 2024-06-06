const popup = document.querySelector('.modal-call')
const openPopup = document.querySelectorAll('.button--show')
const closePopup = document.querySelector('.modal__call--close')
const popupBg = document.querySelector('.modal-call-bg')

for (let i = 0; i < openPopup.length; i++) {
  openPopup[i].addEventListener('click', function (evt) {
    evt.preventDefault()
    popup.classList.add('modal-call--open')
    popupBg.classList.add('modal-call-bg--open')
  })
}

closePopup.addEventListener('click', function () {
  popup.classList.remove('modal-call--open')
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
