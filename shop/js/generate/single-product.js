// import { products } from "./array/products";
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
console.log(productId);

function loadItem() {
    // // Предполагается, что products - это массив объектов продуктов

    const products = [
        {
            id: "1",
            name: "Городской велосипед PULSE диаметр 27,5”",
            cost: 100,
            costLast: 500,
            description: "Рождественский колокольчик",
            image: "/assets/img/png/scooter/scooter-06.png",
        },
        {
            id: "2",
            name: "Горный велосипед KMS диаметр 26”",
            cost: 4400,
            costLast: 500,
            description: "Шапка Санты Клауса",
            image: "/assets/img/png/scooter/scooter-02.png",
        },
        {
            id: "3",
            name: "Самокат трюковой KMS TRICK, дека 48 см",
            cost: 5422,
            costLast: 500,
            description: "Рождественские подарки",
            image: "/assets/img/png/scooter/scooter-02.png",
        },
        {
            id: "4",
            name: "Городской велосипед PULSE диаметр 27,5”",
            cost: 4500,
            costLast: 500,
            description: "Рождественский колокольчик",
            image: "/assets/img/png/scooter/scooter-03.png",
        },
        {
            id: "5",
            name: "Городской велосипед PULSE диаметр 27,5”",
            cost: 2000,
            costLast: 500,
            description: "Шапка Санты Клауса",
            image: "/assets/img/png/scooter/scooter-04.png",
        },
        {
            id: "6",
            name: "Горный велосипед KMS диаметр 26”",
            cost: 26000,
            costLast: 500,
            description: "Рождественские подарки",
            image: "/assets/img/png/scooter/scooter-05.png",
        },
    ];

    const product = products.find((item) => item.id === productId);

    if (product) {
        console.log(product);

        document.getElementById("productImage").src = product.image;
        console.log(product.image);

        document.getElementById("productTitle").textContent = product.name;
        document.getElementById("productDescription").textContent =
            product.description;
        console.log(product.description);

        document.getElementById(
            "productPrice"
        ).textContent = `Цена: ${product.cost} руб.`;
    } else {
        console.log("Продукт не найден");
    }
}

loadItem();
