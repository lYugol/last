const popup = document.querySelector('.modal-call');
const openPopup = document.querySelectorAll('.button-show');
const closePopup = document.querySelector('.modal__call-close');

for(let i = 0; i < openPopup.length ; i++){
openPopup[i].addEventListener('click', function(evt){
        evt.preventDefault();
        popup.classList.add('modal-call--open')
    });

}

    closePopup.addEventListener('click', function(){
        popup.classList.remove('modal-call--open')
    })
