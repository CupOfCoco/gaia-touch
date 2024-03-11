let navbar = document.querySelector('.bottom-navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
}
document.querySelector('#close-navbar').onclick = () => {
    navbar.classList.remove('active');
}
window.onscroll = () =>{
    navbar.classList.remove('active');
}


//menu
searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active') 
}

let loginForm = document.querySelector('.login-form-container');

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
}
document.querySelector('#close-login-btn').onclick = () =>{
    loginForm.classList.remove('active');
}


window.onscroll = () => {
    if(window.scrollY > 80){
        document.querySelector('header .header2').classList.add('active');
    }else{
        document.querySelector('header .header2').classList.remove('active');
    }
}

window.onload = () => {
    if(window.scrollY > 80){
        document.querySelector('header .header2').classList.add('active');
    }else{
        document.querySelector('header .header2').classList.remove('active');
    }
}

let slides = document.querySelectorAll('.home .slides-container .slide');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index =(index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index =(index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

//swiper

const ReviewSwiper = new Swiper(".review-slider",{
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    grabCursor: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable:true,
    },
    centeredSlides: true,
    breakpoints:{
        0: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        1020:{
            slidesPerView: 3,
        },
    },
});