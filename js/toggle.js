let burger = document.querySelector('.mobile-bar');
let links = document.querySelector('.nav-links')
let liTag = document.querySelectorAll('li');
let aTag = document.querySelectorAll('a');

burger.addEventListener("click", toggleMenu);

function toggleMenu() {
    links.classList.toggle('active');
    for (i=0; i < liTag.length; i++) {
        liTag[i].classList.toggle('active');
    };
    for (i=0; i < aTag.length; i++) {
        aTag[i].classList.toggle('active')
    }
}