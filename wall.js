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

        function FindData() {
    const dbref = ref(db, "messages"); // Ссылка на "messages"

    get(dbref)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val(); // Получаем все сообщения
                const messages = Object.entries(data) // Преобразуем объект в массив [ключ, значение]
                    .sort((a, b) => b[0] - a[0]) // Сортируем по ключам (меткам времени) в порядке убывания
                    .slice(0, 3); // Берем только три последних сообщения

                // Отображаем сообщения
                msgs.innerHTML = "Последние сообщения от фанатов:<br>";
                messages.forEach(([key, value]) => {
                    msgs.innerHTML += `${value.content}<br>`;
                });
            } else {
                alert("Данные не найдены.");
            }
        })
        .catch((error) => {
            alert("Ошибка при получении данных: " + error.message);
        });
}

// Привязываем событие к кнопке
submitbtn.addEventListener('click', FindData);
