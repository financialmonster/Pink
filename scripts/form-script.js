var submitButton = document.querySelector(".form__button");
var popupSuccess = document.querySelector(".modal-success");
var popupFailure = document.querySelector(".modal-failure");
var successButton = popupSuccess.querySelector(".modal__button--success");
var failureButton = popupFailure.querySelector(".modal__button--failure");
var requiredSurname = document.querySelector(".form__sur-name");
var requiredFirstname = document.querySelector(".form__first-name");
var requiredEmail = document.querySelector(".form__email");

submitButton.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (!requiredSurname.value || !requiredFirstname.value || !requiredEmail.value) {
        popupFailure.classList.add("show-js");     
    } else {
        popupSuccess.classList.add("show-js"); 
    }
}); 

successButton.addEventListener("click", function() {
    popupSuccess.classList.remove("show-js"); 
});

failureButton.addEventListener("click", function() {
    popupFailure.classList.remove("show-js"); 
});

window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27 && (popupSuccess.classList.contains("show-js") || popupFailure.classList.contains("show-js"))) {
        evt.preventDefault();
        popupSuccess.classList.remove("show-js"); 
        popupFailure.classList.remove("show-js"); 
    }
});
