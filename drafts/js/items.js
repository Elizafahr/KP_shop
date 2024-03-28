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
        "₽ </h5> ";
      out +=
        ' <h5 class="card-title  small ligth stroked lastPrice">' +
        data[key]["costLast"] +
        "₽ </h5></div>";
      out += '<p class="card-text">' + data[key]["name"] + "</p>";

      out += "<a href='#' class='btn btn-primary'>Выбрать</a>";
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
      out += '<img src="' + data[key].image + '" class="review-image">';
      out += '<h5 class="review-name">' + data[key].name + "</h5>";
      out += '<p class="review-text">' + data[key].textRewiew + "</p>";
      out += "</swiper-slide>";
    }
    $("#mySwiperRewiews").html(out);
  });
}
