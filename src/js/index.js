import '../css/reset.css';
import '../css/main.css';
import '../css/contacts.css';
import Inputmask from "inputmask";

// phone mask 
document.addEventListener("DOMContentLoaded", function() {
    var phoneInputs = document.querySelectorAll('input[type="tel"]');
    var im = new Inputmask("+7 (999) 999-99-99");
    phoneInputs.forEach(function(input) {
        im.mask(input);
    });
});

// header / footer connection 
document.addEventListener("DOMContentLoaded", function () {
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
        });
});
document.addEventListener("DOMContentLoaded", function () {
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        });
});