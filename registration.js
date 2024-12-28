// Импортируем Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";

// Конфигурация Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBOw9cExyt9SZnp6TnPi9W2BGclCD9x0aQ",
  authDomain: "registration-efbba.firebaseapp.com",
  projectId: "registration-efbba",
  storageBucket: "registration-efbba.appspot.com",
  messagingSenderId: "172481332482",
  appId: "1:172481332482:web:7cf04a50e02f09bf76ee1b"
};


// Инициализируем Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Находим кнопку и добавляем обработчик
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", function (event) {
  event.preventDefault(); // Отменяем стандартное поведение формы

  // Получаем значения полей
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const pass_confirmation = document.getElementById("passwordconfirmation").value;

  if (pass_confirmation==password){
    // Создаём пользователя
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
       // Пользователь успешно создан
        const user = userCredential.user;
        alert("User successfully created: " + user.email);
      })
      .catch((error) => {
        // Обрабатываем ошибки
        alert("Error: " + error.message);
      });
  }
  else{
    alert("Повторный ввод пароля некорректен")
  }
});