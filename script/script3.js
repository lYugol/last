const popupFeedback = document.querySelector('.modal-feedback');
const openPopupFeedback = document.querySelector('.button-ivent');
const closePopupFeedback = document.querySelector('.modal__feedback-close');


openPopupFeedback.addEventListener('click', function(evt){
        evt.preventDefault();
        popupFeedback.classList.add('modal-feedback--open')
    });
    closePopupFeedback.addEventListener('click', function(){
        popupFeedback.classList.remove('modal-feedback--open')
    })
