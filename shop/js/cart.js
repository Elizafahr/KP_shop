const cartItems = [
  {
    id: "0",
    name: 'Горный велосипед PULSE, скоростной, дисковые тормоза, 20", SHIMANO, 2023',
    cost: 11800,
    costLast: 18000,
    quantity: 1,

    description:
      "Горный велосипед с колесами диаметром 20 дюймов идеально подходит для подростков мальчиков и девочек с ростом от 100 до 130 см. Этот велосипед отличный выбор для катания как в парке, так и по пересеченной местности. Он оснащен трансмиссией Shimano, что гарантирует плавное и эффективное передвижение. Механические дисковые тормоза обеспечивают надежное и безопасное торможение, а передняя амортизационная вилка добавляет комфорта и сглаживает неровности дороги для более приятного катания.",
    image: "/assets/img/png/scooter/scooter-06.png",
  },
  {
    id: "1",
    name: 'Горный велосипед PULSE, скоростной, дисковые тормоза, 20", SHIMANO, 2023',
    cost: 11800,
    costLast: 18000,
    quantity: 1,
    description:
      "Горный велосипед с колесами диаметром 20 дюймов идеально подходит для подростков мальчиков и девочек с ростом от 100 до 130 см. Этот велосипед отличный выбор для катания как в парке, так и по пересеченной местности. Он оснащен трансмиссией Shimano, что гарантирует плавное и эффективное передвижение. Механические дисковые тормоза обеспечивают надежное и безопасное торможение, а передняя амортизационная вилка добавляет комфорта и сглаживает неровности дороги для более приятного катания.",
    image: "/assets/img/png/scooter/scooter-06.png",
  },
  {
    id: "2",
    name: "Горный велосипед KMS диаметр 26”",
    cost: 4400,
    costLast: 500,
    brand: "BLACKOUT",
    description:
      "Горный велосипед с колесами диаметром 20 дюймов идеально подходит для подростков мальчиков и девочек с ростом от 100 до 130 см. Этот велосипед отличный выбор для катания как в парке, так и по пересеченной местности. Он оснащен трансмиссией Shimano, что гарантирует плавное и эффективное передвижение. Механические дисковые тормоза обеспечивают надежное и безопасное торможение, а передняя амортизационная вилка добавляет комфорта и сглаживает неровности дороги для более приятного катания.",
    image: "/assets/img/png/scooter/scooter-02.png",
  },
];

let out = "";
for (const key in cartItems) {
  const data = cartItems[key];
  out += ` <div class="d-flex row  align-items-center mb-3 cartItem" dataset="data.id" >
            <div class="col-lg-3 col-md-3 img-cartItem">
                <img class="img-fluid rounded-3" src="${data.image}" alt="${data.name}">
            </div>
            <div class="col-lg-4 col-md-5">
                <p class="mb-0">${data.name}</p>
            </div>
            <div class="costLast">
                <h6 class="mb-0 t "> ${data.cost}₽ </h6>
            </div>
            <div class="w-auto">
                <div class="input-group d-flex ">
                    <button class="btn btn-outline-secondary" type="button">-</button>
                    <input type="number" class="form-control text-center" value="1" min="1">
                    <button class="btn btn-outline-secondary" type="button">+</button>
                </div>
            </div>
            <div class="del  w-auto">
                <button class="btn  btn-sm">x</button>
            </div>
        </div>

        `;
}
document.querySelector("#cartItems").innerHTML = out;

// Найдем все элементы с классом "cartItem"
const cartItemsBlocks = document.querySelectorAll(".cartItem");

// Перебираем каждый элемент
cartItemsBlocks.forEach((item) => {
  // Ищем кнопки "+" и "-" внутри элемента
  const minusBtn = item.querySelector(".btn-outline-secondary:first-of-type");
  const plusBtn = item.querySelector(".btn-outline-secondary:last-of-type");
  const input = item.querySelector('input[type="number"]');
  const deleteButton = item.querySelector(".del .btn");

  // Добавляем обработчики событий для кнопок
  minusBtn.addEventListener("click", () => {
    if (input.value > 1) {
      input.value = parseInt(input.value) - 1;
    }
  });

  plusBtn.addEventListener("click", () => {
    input.value = parseInt(input.value) + 1;
  });

  // Добавляем обработчик события для кнопки удаления
  deleteButton.addEventListener("click", () => {
    // Находим индекс удаляемого элемента в массиве
    const index = cartItems.findIndex(
      (cartItem) => cartItem.id === item.dataset.id
    );

    // Удаляем элемент из массива
    cartItems.splice(index, 1);

    // Удаляем соответствующий элемент из DOM
    item.remove();
  });
});

const orderButton = document.getElementById("orderButton");
const orderForm = document.getElementById("orderForm");
//const cartItems = document.getElementById("cartItems"); // Убедитесь, что этот элемент существует в вашем HTML
const cartInfo = document.getElementById("cartInfo"); // Убедитесь, что этот элемент существует в вашем HTML

// Функция для отображения всплывающего окна с данными заказа
function showOrderConfirmation(total, itemCount, date) {
  const confirmation = `
        <div class="modal" tabindex="-1">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Заказ оформлен</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>Сумма: ${total} ₽</p>
                <p>Количество товаров: ${itemCount}</p>
                <p>Дата: ${date}</p>
                <p>Спасибо за ваш заказ!</p>
              </div>
              <div class="modal-footer">
                <button  onclick() type="button" class="btn btn-secondary " data-bs-dismiss="modal">Закрыть</button>
              </div>
            </div>
          </div>
        </div>
      `;

  const modalElement = document.createElement("div");
  modalElement.innerHTML = confirmation;
  document.body.appendChild(modalElement);

  const modal = new bootstrap.Modal(modalElement.querySelector(".modal"));
  modal.show();

  // Обработчик события для закрытия всплывающего окна
  document.querySelector("#close")
    .addEventListener("click", () => {
      // Скрываем элементы после закрытия всплывающего окна
      cartItems.style.display = "none";
      cartInfo.style.display = "none";
      alert("fff")
    });
}

// Функция для обработки отправки формы заказа
function handleOrderForm(event) {
  event.preventDefault();

  // Получаем значения из формы ( добавить валидацию и обработку данных)!!!!!!!!
  const formData = new FormData(event.target);
  const name = formData.get("name");
  const surname = formData.get("surname");
  const email = formData.get("email");
  const zipcode = formData.get("zipcode");
  const city = formData.get("city");
  const address = formData.get("address");
  const comment = formData.get("comment");

  // Заменить на реальное!!!!!!!!!!!!!!!!!!!!!!!!!!
  const total = 1335;
  const itemCount = 3;
  const date = new Date().toLocaleDateString(); // Текущая дата

  // Отображаем всплывающее окно с данными заказа
  showOrderConfirmation(total, itemCount, date);
}

// Обработчик события для кнопки "Оформить заказ"
orderButton.addEventListener("click", () => {
  orderForm.style.display = "block";
  //cartItems.style.display = "none";
  cartInfo.style.display = "none";
});

// Обработчик события для формы заказа
const orderFormElement = orderForm.querySelector("form");
orderFormElement.addEventListener("submit", handleOrderForm);
