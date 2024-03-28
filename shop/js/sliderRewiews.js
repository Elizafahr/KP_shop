const swiperElRewiews = document.querySelector("#mySwiperRewiews");

Object.assign(swiperElRewiews, {
  slidesPerView: 2,
  centeredSlides: false,
  spaceBetween: 10,
  navigation: true,
  scroll: true,
});

swiperElRewiews.initialize();
const swiperRewiews = swiperElRewiews.swiper;
