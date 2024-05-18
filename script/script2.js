const popup = document.querySelector('.modal-call');
const openPopup = document.querySelectorAll('.button-show');
const closePopup = document.querySelector('.modal__call-close');

openPopup.forEach((button)=>{
    button.addEventListener('click', function(evt){
        evt.preventDefault();
        popup.classList.add('modal-call--open')
    });
    closePopup.addEventListener('click', function(){
        popup.classList.remove('modal-call--open')
    })
})