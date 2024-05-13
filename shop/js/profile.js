document.addEventListener("DOMContentLoaded", function () {
  // Определение элементов для отображения информации о пользователе
  const userNameEl = document.getElementById("userName");
  const userEmailEl = document.querySelector(".user-email");
  const userPhoneEl = document.querySelector(".user-phone");
  const userCityEl = document.querySelector(".user-city");
  const userForm = document.getElementById("userForm");

  // Получение данных пользователя из localStorage
  const storedUser = JSON.parse(localStorage.getItem("user") || "{}");
  const storedUserOld = JSON.parse(localStorage.getItem("userOld") || "{}");

  // Определение, какой набор данных использовать
  let userData = storedUser; // По умолчанию используется данные 'user'
  if (Object.keys(userData).length <= 0) {
    // Если есть данные 'userOld'
    userData = storedUserOld; // Используем данные 'userOld'
  }

  // Заполнение формы из localStorage
  userNameEl.textContent = `${userData.username || ""} ${
    userData.surname || ""
  }`;
  userEmailEl.textContent = userData.email || "";
  userPhoneEl.textContent = userData.phoneNumber || "";
  userCityEl.textContent = userData.adress || "";

  Object.entries(userData).forEach(([key, value]) => {
    const input = userForm.elements[key];
    if (input) {
      input.value = value;
    }
  });

  // Обработка отправки формы для изменения информации
  const saveChangesBtn = document.getElementById("saveChanges");
  saveChangesBtn.addEventListener("click", function () {
    const formData = new FormData(userForm);
    const updatedUserData = Object.fromEntries(formData.entries());

    // Обновление данных пользователя в localStorage
    localStorage.setItem("user", JSON.stringify(updatedUserData)); // Обновляем данные 'user'

    // Обновление отображения информации о пользователе на странице
    userNameEl.textContent = `${updatedUserData.username || ""} ${
      updatedUserData.surname || ""
    }`;
    userEmailEl.textContent = updatedUserData.email || "";
    userPhoneEl.textContent = updatedUserData.phoneNumber || "";
    userCityEl.textContent = updatedUserData.adress || "";

    // Закрытие модального окна
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("exampleModal")
    );
    modal.hide();
  });




    // Получение данных пользователя из localStorage
    const storedUser2 = JSON.parse(localStorage.getItem("user") || "{}");
    const storedUserOld2 = JSON.parse(localStorage.getItem("userOld") || "{}");
  
    // Определение, какой набор данных использовать
    let userData2 = storedUser2; // По умолчанию используется данные 'user'
    if (Object.keys(userData2).length <= 0) {
      // Если есть данные 'userOld'
      userData2 = storedUserOld2; // Используем данные 'userOld'
    }


  // Находим блоки, которые нужно показать или скрыть
  const orderedBlock = document.getElementById("orders-notnull");
  const notOrderedBlock = document.getElementById("orders-none");

  // Проверяем значение ordered и показываем/скрываем соответствующий блок
  if ( userData2.ordered === "true") {
    orderedBlock.style.display = "block";
    notOrderedBlock.style.display = "none";
  }
   else {
    orderedBlock.style.display = "none";
    notOrderedBlock.style.display = "block";
  }
});
