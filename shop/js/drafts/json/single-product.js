//Вывод товаров
$('document').ready(function () {
  loadItem()
})


const urlParams = new URLSearchParams(window.location.search)
const productId = urlParams.get('id')
console.log(productId)
function loadItem () {
  // Загрузка данных о товаре с использованием AJAX-запроса или из файла JSON
  $.getJSON('special.json', function (data) {
    // Поиск товара по id
    // const product = data.find(item => item.id === productId)
    const product = data[productId];

    console.log(data)
    // Вывод информации о товаре на страницу
    $('#productImage').attr('src', product.image)
    $('#productTitle').text(product.name)
    $('#productDescription').text(product.description)
    $('#productPrice').text(`Цена: ${product.cost} руб.`)

    // Обработчик события добавления товара в корзину
    $('.btn').click(function () {
      // Опишите здесь логику добавления товара в корзину
    })
  })
}
