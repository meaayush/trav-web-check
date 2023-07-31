
let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');

let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let videoBtn = document.querySelectorAll('.vid-btn');
window.onscroll=() => {
    searchBtn.classList.remove('fa-times');
    searchBar.classList.remove('active');
}
searchBtn.addEventListener('click',()=>{
    searchBtn.classList.toggle('fa-times');
    searchBar.classList.toggle('active');
}) 
formBtn.addEventListener('click',()=>{
    console.log("dafs");
    loginForm.classList.add('active');   
}) 
formClose.addEventListener('click',()=>{
    loginForm.classList.remove('active');   
})
videoBtn.forEach(btn =>{
    btn.addEventListener('click', ()=>{
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add("active");
        let src = btn.getAttribute('data-src');
        document.querySelector('#video-slider').src = src;
    });
});

var swiper = new Swiper(".review-slider", {
    slidesPerView:4,
    spaceBetween: 30,
    loop:true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
 

  
  