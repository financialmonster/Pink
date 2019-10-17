var menuOpen = document.querySelector(".main-nav__toggle");
var menuClose = document.querySelector(".main-nav__toggle--close");
var menu = document.querySelector(".cite-list");
var pageHeader = document.querySelector(".page-header");

menuOpen.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.add("show-js");
    menuClose.classList.add("show-js");
    pageHeader.classList.add("margintop-js");
});

menuClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    menu.classList.remove("show-js");
    menuClose.classList.remove("show-js");
    pageHeader.classList.remove("margintop-js");
});