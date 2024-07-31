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