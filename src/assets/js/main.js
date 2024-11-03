// testimonialSwiper
const swiper = new Swiper(".testimonialSwiper", {
  loop: true,
  navigation: {
    nextEl: "#testimonialNextButton",
    prevEl: "#testimonialPrevButton",
  },
});

var ourTeamMembers = new Swiper(".ourTeamMembers", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  loop: true,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  breakpoints: {
    550: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
});
