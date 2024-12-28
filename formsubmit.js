
        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyBOw9cExyt9SZnp6TnPi9W2BGclCD9x0aQ",
          authDomain: "registration-efbba.firebaseapp.com",
          databaseURL: "https://registration-efbba-default-rtdb.firebaseio.com",
          projectId: "registration-efbba",
          storageBucket: "registration-efbba.firebasestorage.app",
          messagingSenderId: "172481332482",
          appId: "1:172481332482:web:7cf04a50e02f09bf76ee1b"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);


        import {getDatabase, set, get, update, remove, ref, child}
        from "https://www.gstatic.com/firebasejs/11.0.2/firebase-database.js"

        const db =getDatabase();

        //var msg = document.querySelector("#msg")

        //  var submitBtn = document.querySelector("#submit")

        // Привязка HTML-элементов
const msg = document.getElementById('msg'); // Убедитесь, что ID совпадает с полем ввода
const submitBtn = document.getElementById('submitbtn');

// Функция для отправки сообщения
function SubmitMessage() {

    event.preventDefault();
    const messageContent = msg.value;
    if (messageContent === '') {
        alert('Пожалуйста, введите сообщение');
        return;
    }

    // Отправляем данные в Firebase
    set(ref(db, 'messages/' + Date.now()), {
        content: messageContent, // Сохраняем значение из поля ввода
    })
    .then(() => {
        alert("Спасибо за поддержку!");
        msg.value = ""; // Очищаем поле после отправки
    })
    .catch((error) => {
        alert("Ошибка при отправке данных: " + error.message);
    });
}

// Привязываем событие к кнопке
submitBtn.addEventListener('click', SubmitMessage);
