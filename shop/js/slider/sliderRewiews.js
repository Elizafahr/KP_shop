// const swiperElRewiews = document.querySelector("#mySwiperRewiews");

// Object.assign(swiperElRewiews, {
//   slidesPerView: 2,
//   centeredSlides: false,
//   spaceBetween: 10,
//   navigation: true,
//   scroll: true,
// });

// swiperElRewiews.initialize();
// const swiperRewiews = swiperElRewiews.swiper;
 // Получаем элемент слайдера
 const swiperElRewiews = document.querySelector("#mySwiperRewiews");

 // Инициализируем слайдер с начальными параметрами
 Object.assign(swiperElRewiews, {
   slidesPerView: 2, // Начальное значение для десктопов
   centeredSlides: false,
   spaceBetween: 10,
   navigation: true,
   scroll: true,
 });
 
 // Инициализируем Swiper
 swiperElRewiews.initialize();
 const swiperRewiews = swiperElRewiews.swiper;
 
 // Функция для изменения количества слайдов в зависимости от размера экрана
 function updateSlidesPerView() {
   if (window.innerWidth <= 768) { // Пример условие для мобильных устройств
     swiperRewiews.params.slidesPerView = 1;
   } else {
     swiperRewiews.params.slidesPerView = 2;
   }
   swiperRewiews.update(); // Обновляем параметры слайдера
 }
 
 // Вызываем функцию при загрузке страницы
 updateSlidesPerView();
 
 // Добавляем обработчик события resize для обновления количества слайдов при изменении размера окна
 window.addEventListener('resize', updateSlidesPerView);