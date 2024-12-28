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
        function LoadNews() {
    const dbref = ref(db, "match"); // Ссылка на "news"

    get(dbref)
        .then((snapshot) => {
            if (snapshot.exists()) {
                const data = snapshot.val(); // Получаем все данные
                const matches = Object.entries(data); // Преобразуем объект в массив [ключ, значение]

                // Проверяем, есть ли элемент с ID table
                const table = document.getElementById("matchesTable");
                if (!table) {
                    console.error("Таблица с ID 'matchesTable' не найдена.");
                    return;
                }

                // Отображаем данные о матчах
                table.innerHTML = `<tr>
                        <th>Дата</th>
                        <th>Противник</th>
                    </tr>`;
                matches.forEach(([key, match]) => {
                    const row = `
                        <tr>
                            <td>${match.date}</td>
                            <td>${match.opponent}</td>
                        </tr>`
                    ;
                    table.innerHTML += row;
                });
            } else {
                table.innerHTML = "Матчей пока нет.";
            }
        })
        .catch((error) => {
            console.error("Ошибка при получении данных:", error);
        });
}

// Вызываем функцию при загрузке страницы
document.addEventListener('DOMContentLoaded', LoadNews);
