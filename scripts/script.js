var menuOpen = document.querySelector(".main-nav__toggle");
var menuClose = document.querySelector(".main-nav__toggle--close");
var menu = document.querySelector(".cite-list");
var pageHeader = document.querySelector(".page-header");

menuOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (menu.classList.contains("hide-js")) {
        menu.classList.add("show-js");
        menuClose.classList.add("show-js");
        pageHeader.classList.add("margintopdown-js");
    } 
});

menuClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    if (menu.classList.contains("show-js")) {
        menu.classList.remove("show-js");
        menuClose.classList.remove("show-js");
        pageHeader.classList.remove("margintopdown-js"); 
    } else {
        menu.classList.add("hide-js");
        menuClose.classList.add("hide-js");
        pageHeader.classList.add("margintopup-js");
    }
});