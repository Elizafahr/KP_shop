//Вывод товаров
$("document").ready(function () {
  loadItems();
  loadItemsRewiews();
});

function loadItems() {
  $.getJSON("special.json", function (data) {
    console.log(data);
    let out = "";
    for (let key in data) {
      out += ' <div class="card"  >  ';
      out +=
        '<div class="image-card"> <img  class="card-img-top" src="' +
        data[key].image +
        '"> </div>';
      out +=
        ' <div class="card-body  "> ' +
        '  <div class="d-flex align-items-center gap-2"> ' +
        ' <h5 class="card-title blue">' +
        data[key]["cost"] +
        "₽ </h5> ";нет
      out +=
        ' <h5 class="card-title  small ligth stroked lastPrice">' +
        data[key]["costLast"] +
        "₽ </h5></div>";
      out += '<p class="card-text">' + data[key]["name"] + "</p>";

      out += '<a href="pages/product.html?id=' + data[key]["id"]  + '" class="btn btn-primary">Выбрать</a>';
      out += "</div>";
      out += "</div>";
    }
    $("#items").html(out);
  });
}

function loadItemsRewiews() {
  $.getJSON("rewiews.json", function (data) {
    console.log(data);
    let out = "";
    for (let key in data) {
      // Добавляем блок вывода отзывов
      out += '<swiper-slide class="review">';
      out +=
        '<div class="d-flex  gap-3 "><img src="' +
        data[key].image +
        '" class="review-image">';
      out +=
        `<div class="d-flex flex-column gap-2"> <div class="stars   ">
        <img src="/assets/img/png/icons/Star.png" alt="Star">
        <img src="/assets/img/png/icons/Star.png" alt="Star">
        <img src="/assets/img/png/icons/Star.png" alt="Star">
        <img src="/assets/img/png/icons/Star.png" alt="Star">
        <img src="/assets/img/png/icons/Star.png" alt="Star">
        </div>
         <h5 class="review-name">` +
        data[key].name +
        "</h5>";
      out += `  </div></div>`;
      out += '<p class="review-text mt-1">' + data[key].textRewiew + "</p>";
      out += "</swiper-slide>";
    }
    $("#mySwiperRewiews").html(out);
  });
}
