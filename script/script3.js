const popupFeedback = document.querySelector('.modal-feedback');
const openPopupFeedback = document.querySelectorAll('.button-ivent');
const closePopupFeedback = document.querySelector('.modal__feedback-close');


for (let i = 0; i < openPopupFeedback.length; i++) {
    openPopupFeedback[i].addEventListener('click', function(evt){
        evt.preventDefault();
        popupFeedback.classList.add('modal-feedback--open')
    });
}
    closePopupFeedback.addEventListener('click', function(){
        popupFeedback.classList.remove('modal-feedback--open')
    })
