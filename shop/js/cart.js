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
    quantity: 3,
    description:
      "Горный велосипед с колесами диаметром 20 дюймов идеально подходит для подростков мальчиков и девочек с ростом от 100 до 130 см. Этот велосипед отличный выбор для катания как в парке, так и по пересеченной местности. Он оснащен трансмиссией Shimano, что гарантирует плавное и эффективное передвижение. Механические дисковые тормоза обеспечивают надежное и безопасное торможение, а передняя амортизационная вилка добавляет комфорта и сглаживает неровности дороги для более приятного катания.",
    image: "/assets/img/png/scooter/scooter-02.png",
  },
];

let totalPrice = 0;
let totalQuantity = 0;

function renderCartItems() {
  const cartItemsContainer = document.getElementById("cartItems");
  cartItemsContainer.innerHTML = "";

  cartItems.forEach((item) => {
    const cartItemElement = document.createElement("div");
    cartItemElement.dataset.id = item.id;

    cartItemElement.innerHTML = `
        <div class="d-flex row align-items-center mb-3 cartItem" data-id="${item.id}">
        <div class="col-lg-3 col-md-3 img-cartItem">
          <img class="img-fluid rounded-3" src="${item.image}" alt="${item.name}">
        </div>
        <div class="col-lg-4 col-md-5">
          <p class="mb-0">${item.name}</p>
        </div>
        <div class="costLast">
          <h6 class="mb-0 t">${item.cost}₽</h6>
        </div>
        <div class="w-auto">
          <div class="input-group d-flex">
            <button class="btn btn-outline-secondary minus-btn" type="button">-</button>
            <input type="number" class="form-control text-center quantity" value="${item.quantity}" min="1">
            <button class="btn btn-outline-secondary plus-btn" type="button">+</button>
          </div>
        </div>
        <div class="del w-auto">
          <button class="btn btn-sm delete-btn">x</button>
        </div>
      </div>
      
      `;

    cartItemsContainer.appendChild(cartItemElement);

    totalPrice += item.cost * item.quantity;
    totalQuantity += item.quantity;

    const minusBtn = cartItemElement.querySelector(".minus-btn");
    const plusBtn = cartItemElement.querySelector(".plus-btn");
    const quantityInput = cartItemElement.querySelector(".quantity");
    const deleteBtn = cartItemElement.querySelector(".delete-btn");

    minusBtn.addEventListener("click", () => {
      if (item.quantity > 1) {
        item.quantity--;
        quantityInput.value = item.quantity;
        totalPrice -= item.cost;
        totalQuantity--;
        renderCartInfo(totalPrice, totalQuantity);
      }
    });

    plusBtn.addEventListener("click", () => {
      item.quantity++;
      quantityInput.value = item.quantity;
      totalPrice += item.cost;
      totalQuantity++;
      renderCartInfo(totalPrice, totalQuantity);
    });

    deleteBtn.addEventListener("click", () => {
      const index = cartItems.findIndex((cartItem) => cartItem.id === item.id);
      totalPrice -= item.cost * item.quantity;
      totalQuantity -= item.quantity;
      cartItems.splice(index, 1);
      renderCartItems();
    });
  });

  renderCartInfo(totalPrice, totalQuantity);
}

function renderCartInfo(totalPrice, totalQuantity) {
  const cartInfoElement = document.getElementById("cartInfo");
  cartInfoElement.innerHTML = `
    <div class="order">
      <div class="order-top">
        <h3>Ваш заказ</h3>
        <div class="order-info">
          <div class="d-flex justify-content-between">
            <div class="ligth">Сумма:</div>
            <p>${totalPrice}₽</p>
            <input type='hidden'  id="totalPriceInp" value='${totalPrice}'>

          </div>
          <div class="d-flex justify-content-between">
            <div class="ligth">Товаров:</div>
            <p>${totalQuantity} шт</p>
            <input type='hidden' id="totalQuantityInp" value='${totalQuantity}'>
          </div>
        </div>
      </div>
      <div class="order-bottom">
        <div class="d-flex justify-content-between">
          <div class="res">
            Итого:
          </div>
          <div class="res">
            ${totalPrice}₽
          </div>
        </div>

        <button class="btn btn-primary w-100" id="orderButton">
          Оформить заказ
        </button>
      </div>
    </div>
  `;
  const orderBtn = cartInfoElement.querySelector("#orderButton");

  if (totalQuantity > 0) {
    cartInfoElement.style.display = "block";
    document.getElementById("no-items").style.display = "none";
  } else {
    cartInfoElement.style.display = "none";
    document.getElementById("no-items").style.display = "block";
  }

  // Обработчик события для кнопки "Оформить заказ"
  orderBtn.addEventListener("click", () => {
     if (localStorage.getItem("authParam") == 'true') {
      orderForm.style.display = "block";
      //cartItems.style.display = "none";
      cartInfo.style.display = "none";
    } else if (localStorage.getItem("authParam") !== true)
      alert("Авторизуйтесь!");
  });
}


window.addEventListener("load", renderCartItems);

const orderButton = document.getElementById("orderButton");
const cartInfo = document.getElementById("cartInfo");
const orderForm = document.getElementById("orderForm");

const OrderMakeBtn = document.getElementById("OrderMakeBtn");
OrderMakeBtn.addEventListener("submit", showOrderConfirmation());

// Функция для отображения всплывающего окна с данными заказа
function showOrderConfirmation() {
  const date = new Date().toLocaleDateString(); // Текущая дата
  let price = 0;
  let Quantity = 0;
  cartItems.forEach((item) => {
    if (item.quantity > 0) {
      price += item.cost * item.quantity;
      Quantity += item.quantity;
    }
  });

  //  HTML-код для всплывающего окна
  const confirmation = `
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title">Заказ оформлен</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p>Сумма: ${price} ₽</p>
                <p>Количество товаров: ${Quantity}</p>
                <p>Дата: ${date}</p>
                <p>Спасибо за ваш заказ!</p>
              </div>
              <div class="modal-footer">
                <button type="button" id="clear" class="btn btn-secondary" data-bs-dismiss="modal" >Закрыть</button>
              </div>
            </div>
          </div>
        </div>
      `;

  //
  // cartItems.splice(0, cartItems.length);
  // renderCartItems();

  // const cartInfoElement = document.getElementById("cartInfo");
  // if (Quantity === 0) {
  //   cartInfoElement.style.display = "none";
  //   document.getElementById("no-items").style.display = "block";
  // } else {
  //   cartInfoElement.style.display = "block";
  //   document.getElementById("no-items").style.display = "none";
  // }

  // Создается новый элемент для вставки HTML-кода
  const modalElement = document.createElement("div");
  modalElement.innerHTML = confirmation;
  // Вставляем созданный элемент в конец <body>
  document.body.appendChild(modalElement);

  const storedUser2 = JSON.parse(localStorage.getItem("user") || "{}");
  const storedUserOld2 = JSON.parse(localStorage.getItem("userOld") || "{}");
  let userData2 = storedUser2; // По умолчанию используется данные 'user'
  if (Object.keys(userData2).length <= 0) {
    userData2 = storedUserOld2;
  }

  // // Проверяем значение ordered и показываем/скрываем соответствующий блок
  // function markOrderedAsTrue() {
  //   userData2.ordered = true; // Установка значения ordered в true
  //   localStorage.setItem("user", JSON.stringify(userData2)); // Сохранение обновленных данных в localStorage
  // }

  // markOrderedAsTrue();
}
