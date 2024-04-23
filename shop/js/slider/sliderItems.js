const swiperEl = document.querySelector("#items");

Object.assign(swiperEl, {
  slidesPerView: 4,
  centeredSlides: false,
  spaceBetween: 10,
  navigation: true,
  scroll: true,
  loop: true,
});

swiperEl.initialize();

const swiper = swiperEl.swiper;
