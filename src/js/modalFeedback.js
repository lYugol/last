const popupFeedback = document.querySelector('.modal-feedback')
const openPopupFeedback = document.querySelectorAll('.button--ivent')
const closePopupFeedback = document.querySelector(
  '.modal-feedback__header--close'
)
const popupFeedbackBg = document.querySelector('.modal-feedback-bg')

for (let i = 0; i < openPopupFeedback.length; i++) {
  openPopupFeedback[i].addEventListener('click', function (evt) {
    evt.preventDefault()
    popupFeedback.classList.add('modal-feedback__header--open')
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
  popupFeedback.classList.remove('modal-feedback__header--open')
  popupFeedbackBg.classList.remove('modal-feedback-bg--open')
})
