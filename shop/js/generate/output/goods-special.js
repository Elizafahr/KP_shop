function outSpecial() {
  const productsContainer = document.querySelector("#items");
  let out = "";

  // Перебираем массив продуктов
  for (const key in products) {
    const data = products[key];
    out += `
        <swiper-slide class="card">
        <div class="image-card">
            <img class="card-img-top" src="${data.image}" alt="">
        </div>
        <div class="card-body ">
            <div class="d-flex align-items-center gap-2">
            <h5 class="card-title blue">${data.cost}₽</h5>
            <h5 class="card-title  small ligth stroked lastPrice">${data.costLast}₽</h5>
            </div>
            <p class="card-text">${data.name}</p>
            <a href="pages/product.html?id=${key}" class="btn btn-primary">Выбрать</a>
        </div>
        </swiper-slide>
    `;
  }

  document.querySelector("#items").innerHTML = out;
}
