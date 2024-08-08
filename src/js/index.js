document.addEventListener('DOMContentLoaded', function() {
    let recallButton = document.querySelector('#recall-button');   
    let popup = document.querySelector('.callpack-popup');   
    let overlay = document.querySelector('.overlay');
    let closePopup = document.querySelector('.closebutton');

    recallButton.addEventListener('click', function() {
        popup.classList.add('show');
        overlay.classList.add('show');
    });

    closePopup.addEventListener('click', function() {
        popup.classList.remove('show');  
        overlay.classList.remove('show');
    });

    overlay.addEventListener('click', function() {
        popup.classList.remove('show');
        overlay.classList.remove('show');
    });
});

