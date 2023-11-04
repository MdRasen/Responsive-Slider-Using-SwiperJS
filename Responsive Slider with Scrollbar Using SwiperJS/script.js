var swiper = new Swiper(".swiper", {
  grabCursor: true,
  mousewheel: {
    invert: true,
  },
  loop: true,
  autoplay: {
    delay: 8000,
    disableOnInteraction: true,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    draggable: true,
  },
  slidesPerView: 1,
  spaceBetween: 10,

  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});
