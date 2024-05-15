// Получаем кнопки "Показать" и "Сбросить"
const applyButton = document.getElementById("apply");
const resetButton = document.getElementById("reset");
const itemsCatalog = document.querySelector("#itemsCatalog");
const items = document.querySelector("#items"); // Используем items для отображения товаров
let minPriceInput;
let maxPriceInput = 30000;
// Получаем ссылки на чекбоксы брендов
const brandBlackoutCheckbox = document.getElementById("brandBlackout");
const brandScenerideCheckbox = document.getElementById("brandSceneride");

let out = "";
let Categ = "";
 
const products = [
  {
    id: "0",
    name: 'Горный велосипед PULSE, скоростной, дисковые тормоза, 20", SHIMANO, 2023',
    cost: 11800,
    costLast: 18000,
    description:
      "Горный велосипед с колесами диаметром 20 дюймов идеально подходит для подростков мальчиков и девочек с ростом от 100 до 130 см. Этот велосипед отличный выбор для катания как в парке, так и по пересеченной местности. Он оснащен трансмиссией Shimano, что гарантирует плавное и эффективное передвижение. Механические дисковые тормоза обеспечивают надежное и безопасное торможение, а передняя амортизационная вилка добавляет комфорта и сглаживает неровности дороги для более приятного катания.",
    image: "../assets/img/png/bicycle/full-image/bicyce-full-02.png",
    category: ["bicycle", "mountain", "adult", "Велосипеды"],
    specifications: {
      "Технические характеристики": {
        Cезонность: "2023",
      },
      Колеса: {
        "Тип обода": "Двойной",
        "Материал обода": "Алюминиевый сплав",
        "Наименование покрышек": "PULSE 20*2.125",
      },
      Вилка: {
        "Наименование вилки": "PULSE",
        "Конструкция вилки": "Пружинно-эластомерная",
        "Ход вилки, мм": "80",
      },
    },
  },
  {
    id: "1",
    name: "Горный велосипед KMS диаметр 26”",
    cost: 11800,
    costLast: 18000,
    brand: "BLACKOUT",
    description:
      "Горный велосипед с колесами диаметром 20 дюймов идеально подходит для подростков мальчиков и девочек с ростом от 100 до 130 см. Этот велосипед отличный выбор для катания как в парке, так и по пересеченной местности. Он оснащен трансмиссией Shimano, что гарантирует плавное и эффективное передвижение. Механические дисковые тормоза обеспечивают надежное и безопасное торможение, а передняя амортизационная вилка добавляет комфорта и сглаживает неровности дороги для более приятного катания.",
    image: "../assets/img/png/bicycle/full-image/bicyce-full-07.png",
    category: ["bicycle", "mountain", "adult", "Велосипеды"],
    specifications: {
      "Технические характеристики": {
        Cезонность: "2023",
      },
      Колеса: {
        "Тип обода": "Двойной",
        "Материал обода": "Алюминиевый сплав",
        "Наименование покрышек": "PULSE 20*2.125",
      },
      Вилка: {
        "Наименование вилки": "PULSE",
        "Конструкция вилки": "Пружинно-эластомерная",
        "Ход вилки, мм": "80",
      },
    },
  },
  {
    id: "2",
    name: "Самокат трюковой KMS TRICK, дека 48 см",
    cost: 4400,
    costLast: 500,
    brand: "BLACKOUT",
    description:
      "Горный велосипед с колесами диаметром 20 дюймов идеально подходит для подростков мальчиков и девочек с ростом от 100 до 130 см. Этот велосипед отличный выбор для катания как в парке, так и по пересеченной местности. Он оснащен трансмиссией Shimano, что гарантирует плавное и эффективное передвижение. Механические дисковые тормоза обеспечивают надежное и безопасное торможение, а передняя амортизационная вилка добавляет комфорта и сглаживает неровности дороги для более приятного катания.",
    image: "../assets/img/png/bicycle/full-image/bicyce-full-05.png",
    category: ["bicycle", "mountain", "adult", "Велосипеды"],
    specifications: {
      "Технические характеристики": {
        Cезонность: "2023",
      },
      Колеса: {
        "Тип обода": "Двойной",
        "Материал обода": "Алюминиевый сплав",
        "Наименование покрышек": "PULSE 20*2.125",
      },
      Вилка: {
        "Наименование вилки": "PULSE",
        "Конструкция вилки": "Пружинно-эластомерная",
        "Ход вилки, мм": "80",
      },
    },
  },
  {
    id: "3",
    name: "Самокат трюковой KMS TRICK, дека 48 см",
    cost: 5422,
    costLast: 500,
    brand: "BLACKOUT",
    description:
      "Горный велосипед с колесами диаметром 20 дюймов идеально подходит для подростков мальчиков и девочек с ростом от 100 до 130 см. Этот велосипед отличный выбор для катания как в парке, так и по пересеченной местности. Он оснащен трансмиссией Shimano, что гарантирует плавное и эффективное передвижение. Механические дисковые тормоза обеспечивают надежное и безопасное торможение, а передняя амортизационная вилка добавляет комфорта и сглаживает неровности дороги для более приятного катания.",
    image: "../assets/img/png/scooter/scooter-02.png",
    category: ["scooter", "stunt", "adult", "Самокаты"],
    specifications: {
      "Технические характеристики": {
        Cезонность: "2023",
      },
      Колеса: {
        "Тип обода": "Двойной",
        "Материал обода": "Алюминиевый сплав",
        "Наименование покрышек": "PULSE 20*2.125",
      },
      Вилка: {
        "Наименование вилки": "PULSE",
        "Конструкция вилки": "Пружинно-эластомерная",
        "Ход вилки, мм": "80",
      },
    },
  },
  {
    id: "4",
    name: "Городской велосипед PULSE диаметр 27,5”",
    cost: 4500,
    costLast: 500,
    brand: "BLACKOUT",
    description:
      "Горный велосипед с колесами диаметром 20 дюймов идеально подходит для подростков мальчиков и девочек с ростом от 100 до 130 см. Этот велосипед отличный выбор для катания как в парке, так и по пересеченной местности. Он оснащен трансмиссией Shimano, что гарантирует плавное и эффективное передвижение. Механические дисковые тормоза обеспечивают надежное и безопасное торможение, а передняя амортизационная вилка добавляет комфорта и сглаживает неровности дороги для более приятного катания.",
    image: "../assets/img/png/bicycle/full-image/bicyce-full-02.png",
    category: ["bicycle", "city", "adult", "Велосипеды"],
    specifications: {
      "Технические характеристики": {
        Cезонность: "2023",
      },
      Колеса: {
        "Тип обода": "Двойной",
        "Материал обода": "Алюминиевый сплав",
        "Наименование покрышек": "PULSE 20*2.125",
      },
      Вилка: {
        "Наименование вилки": "PULSE",
        "Конструкция вилки": "Пружинно-эластомерная",
        "Ход вилки, мм": "80",
      },
    },
  },
  {
    id: "5",
    name: "Городской велосипед PULSE диаметр 27,5”",
    cost: 2000,
    costLast: 500,
    brand: "BLACKOUT",
    description:
      "Горный велосипед с колесами диаметром 20 дюймов идеально подходит для подростков мальчиков и девочек с ростом от 100 до 130 см. Этот велосипед отличный выбор для катания как в парке, так и по пересеченной местности. Он оснащен трансмиссией Shimano, что гарантирует плавное и эффективное передвижение. Механические дисковые тормоза обеспечивают надежное и безопасное торможение, а передняя амортизационная вилка добавляет комфорта и сглаживает неровности дороги для более приятного катания.",
    image: "../assets/img/png/bicycle/full-image/bicyce-full-01.png",
    category: ["bicycle", "city", "adult", "Велосипеды"],
    specifications: {
      "Технические характеристики": {
        Cезонность: "2023",
      },
      Колеса: {
        "Тип обода": "Двойной",
        "Материал обода": "Алюминиевый сплав",
        "Наименование покрышек": "PULSE 20*2.125",
      },
      Вилка: {
        "Наименование вилки": "PULSE",
        "Конструкция вилки": "Пружинно-эластомерная",
        "Ход вилки, мм": "80",
      },
    },
  },
  {
    id: "6",
    name: "Горный детский велосипед KMS диаметр 26”",
    cost: 26000,
    costLast: 500,
    brand: "BLACKOUT",
    description:
      "Горный велосипед с колесами диаметром 20 дюймов идеально подходит для подростков мальчиков и девочек с ростом от 100 до 130 см. Этот велосипед отличный выбор для катания как в парке, так и по пересеченной местности. Он оснащен трансмиссией Shimano, что гарантирует плавное и эффективное передвижение. Механические дисковые тормоза обеспечивают надежное и безопасное торможение, а передняя амортизационная вилка добавляет комфорта и сглаживает неровности дороги для более приятного катания.",
    image: "../assets/img/png/bicycle/full-image/bicyce-full-09.png",
    category: ["scooter", "mountain", "child", "Велосипеды"],
    specifications: {
      "Технические характеристики": {
        Cезонность: "2023",
      },
      Колеса: {
        "Тип обода": "Двойной",
        "Материал обода": "Алюминиевый сплав",
        "Наименование покрышек": "PULSE 20*2.125",
      },
      Вилка: {
        "Наименование вилки": "PULSE",
        "Конструкция вилки": "Пружинно-эластомерная",
        "Ход вилки, мм": "80",
      },
    },
  }, {
    id: "7",
    name: "Самокат детский PULSE",
    cost: 18000,
    costLast: 22000,
    brand: "PULSE",
    description: "Самокат для детей от 5 до 9 лет",
    image: "../assets/img/png/scooter/scooter-05.png",
    category: ["самокат", "электрический", "Самокаты"],
  },
  {
    id: "8",
    name: "Скейтборд PULSE",
    cost: 4200,
    costLast: 5000,
    brand: "PULSE",
    description: "Классический скейтборд с прочной декой длиной 80 см и высококачественными подшипниками для плавного катания.",
    image: "../assets/img/png/acessoires/scate2.png",
    category: ["скейтборд", "Скейтбординг"],
  },
  {
    id: "9",
    name: "Скейтборд PULSE детский",
    cost: 3800,
    costLast: 4500,
    brand: "PULSE",
    description: "Скейтборд с компактной декой длиной 75 см, идеальный для начинающих райдеров.",
    image: "../assets/img/png/acessoires/scate.png",
    category: ["скейтборд", "Скейтбординг"],
  },
  {
    id: "10",
    name: "Шейкер спортивный 500 мл",
    cost: 350,
    costLast: 500,
    description: "Спортивный шейкер объемом 500 мл для приготовления протеиновых коктейлей и других напитков. Изготовлен из прочного пластика, имеет удобную форму для захвата руки и встроенное ситечко для лучшего перемешивания.",
    image: "../assets/img/png/acessoires/shaker2.png",
    category: ["Аксессуары", "спортпит"],
  },
  {
    id: "11",
    name: "Шейкер спортивный 700 мл",
    cost: 450,
    costLast: 600,
    description: "Спортивный шейкер объемом 700 мл для приготовления протеиновых коктейлей и других напитков. Изготовлен из прочного пластика, имеет удобную форму для захвата руки и встроенное ситечко для лучшего перемешивания.",
    image: "../assets/img/png/acessoires/shaker.png",
    category: ["Аксессуары", "спортпит"],
  },
  {
    id: "12",
    name: "Солнцезащитные спортивные очки",
    cost: 1200,
    costLast: 1500,
    description: "Стильные и прочные солнцезащитные очки специально разработанные для занятий спортом. Обеспечивают 100% защиту от ультрафиолетовых лучей, имеют ударопрочные линзы и регулируемые дужки для идеальной посадки.",
    image: "../assets/img/png/acessoires/eye2.png",
    category: ["Аксессуары", "солнцезащитные очки"],
  },
  {
    id: "13",
    name: "Солнцезащитные спортивные очки поляризационные",
    cost: 1800,
    costLast: 2200,
    description: "Высококачественные поляризационные солнцезащитные очки для спорта. Обеспечивают 100% защиту от ультрафиолетовых лучей и устраняют блики. Ударопрочные линзы и регулируемые дужки для максимального комфорта.",
    image: "../assets/img/png/acessoires/eye1.png",
    category: ["Аксессуары", "солнцезащитные очки"],
  },
];
let filtratedProductsArray = [];

filterByCategory("Все");

//Вывод товаров
function render(products) {
  items.innerHTML = "";
  // Выводим отфильтрованные продукты
  products.forEach((product) => {
    const productItem = document.createElement("div");

    filtratedProductsArray.splice(0, filtratedProductsArray.length);
    filtratedProductsArray.push(product);
    productItem.innerHTML = `
        <div class="card categCard" data-category="${product.category}" data-brand="${product.brand}" data-price="${product.cost}">
        <div class="image-card">
            <img class="card-img-top" src="${product.image}" alt="">
        </div>
        <div class="card-body ">
            <div class="d-flex align-items-center gap-2">
            <h5 class="card-title blue">${product.cost}₽</h5>
            <h5 class="card-title  small light stroked lastPrice">${product.costLast}₽</h5>
            </div>
            <p class="card-text">${product.name}</p>
            
            <a href="product.html?id=${product.id}" class="btn btn-primary">Выбрать</a>
        </div>
        </div>
        `;
    items.appendChild(productItem);
  });
}

//Правильное отображение активности ссылки-категории
const categoryLinks = document.querySelectorAll(".list-menu a");
// Добавляем обработчик событий к каждому элементу списка
categoryLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    // Удаляем класс 'active' у всех элементов списка
    categoryLinks.forEach((link) => link.classList.remove("active"));
    // Добавляем класс 'active' к элементу, на который был совершен клик
    this.classList.add("active");
    Categ = this.textContent;
  });
});

//фильтрация по категориям
function filterByCategory(category) {
  const items = document.querySelector("#items");
  items.innerHTML = ""; // Очищаем список товаров

  // Фильтруем продукты по выбранной категории
  const filteredProducts = products.filter((product) => {
    if (category === "Все") {
      return true; // Возвращаем все продукты, если выбрана категория "Все"
    } else {
      console.log(category + product.category);
      return product.category.includes(category); // Возвращаем продукты, которые принадлежат выбранной категории
    }
  });

  render(filteredProducts);
  return filteredProducts;
}






// фильтрации по цене
function filterByPrice(minPrice, maxPrice) {
  let filteredProducts;
  filteredProducts = products.filter((product) => {
    return product.cost >= minPrice && product.cost <= maxPrice;
  });
  return filteredProducts;
}

// Обработчик события для кнопки "Показать"
applyButton.addEventListener("click", function () {
  minPriceInput = Number(document.querySelector("#minPrice").value);
  maxPriceInput = Number(document.querySelector("#maxPrice").value);

  render(filterProducts(Categ, minPriceInput, maxPriceInput));
});

function filterProducts(category, minPrice, maxPrice) {
 
  // Фильтрация по категории
  let filteredProducts = products;
  if (category !== "Все") {
    filteredProducts = filteredProducts.filter((product) =>
      product.category.includes(category)
    );
  }

  
    // Фильтрация по цене
    filteredProducts = filteredProducts.filter(
      (product) => product.cost >= minPrice && product.cost <= maxPrice
    );
 

  // Фильтрация по brands
  const selectedBrands = [];

  // Проверяем, какие чекбоксы выбраны
  if (brandBlackoutCheckbox.checked) {
    selectedBrands.push("BLACKOUT");
  }
  if (brandScenerideCheckbox.checked) {
    selectedBrands.push("SCENERIDE");
  }
  // Фильтруем товары по выбранным брендам
  filteredProducts = filteredProducts.filter(
    (product) =>
      selectedBrands.includes(product.brand) || selectedBrands.length === 0
  );

  return filteredProducts;
}

// Обработчик события для кнопки "Сбросить"
resetButton.addEventListener("click", function () {
  filterByCategory("Все");
  // Удаляем класс 'active' у всех элементов списка
  maxPriceInput = document.querySelector("#maxPrice").value = Infinity;

  categoryLinks.forEach((link) => link.classList.remove("active"));
  document.getElementById("allCateg").classList.add("active");
  filterByCategory("Все");
});
