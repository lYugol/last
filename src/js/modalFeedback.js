const popupFeedback = document.querySelector('.modal-feedback')
const openPopupFeedback = document.querySelectorAll('.button--ivent')
<<<<<<< HEAD
const closePopupFeedback = document.querySelector(
  '.modal-feedback__header--close'
)
=======
const closePopupFeedback = document.querySelector('.modal__feedback-close')
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54
const popupFeedbackBg = document.querySelector('.modal-feedback-bg')

for (let i = 0; i < openPopupFeedback.length; i++) {
  openPopupFeedback[i].addEventListener('click', function (evt) {
    evt.preventDefault()
<<<<<<< HEAD
    popupFeedback.classList.add('modal-feedback__header--open')
=======
    popupFeedback.classList.add('modal-feedback--open')
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54
    popupFeedbackBg.classList.add('modal-feedback-bg--open')
  })
}

popupFeedbackBg.addEventListener('click', function (evt) {
  if (evt.currentTarget === evt.target) {
    popupFeedbackBg.classList.remove('modal-feedback-bg--open')
  }
})

popupFeedback.addEventListener('click', function (evt) {
  if (evt.currentTarget === evt.target) {
    popupFeedbackBg.classList.remove('modal-feedback-bg--open')
  }
})

closePopupFeedback.addEventListener('click', function () {
<<<<<<< HEAD
  popupFeedback.classList.remove('modal-feedback__header--open')
  popupFeedbackBg.classList.remove('modal-feedback-bg--open')
})
=======
  popupFeedback.classList.remove('modal-feedback--open')
  popupFeedbackBg.classList.remove('modal-feedback-bg--open')
})
console.log('отработал_feedbakc')
>>>>>>> e72c493548ab557700d14d1aa9be081a3d030d54
