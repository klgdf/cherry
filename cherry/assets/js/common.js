"use strict";

// General code before loading page
document.addEventListener('DOMContentLoaded', function () {

    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 6,
      slidesPerView: 4,
      freeMode: true,
      loop: true,
      watchSlidesProgress: false,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 6,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });

});





