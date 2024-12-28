// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";      
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
        var msgs = document.querySelector('#msgs');

    function LoadNews() {

    const dbref = ref(db, "news");

    get(dbref)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val(); // Получаем все сообщения
                const messages = Object.entries(data) // Преобразуем объект в массив [ключ, значение]
                // Отображаем сообщения
                msgs.innerHTML = "<br>";
                messages.forEach(([key, value]) => {
                    msgs.innerHTML += `-${value.content}<br>`;
                });
            } else {
                alert("Данные не найдены.");
            }
        })
        .catch((error) => {
            alert("Ошибка при получении данных: " + error.message);
        });
}

// Вызываем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', LoadNews);