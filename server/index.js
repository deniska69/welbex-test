const express = require("express"); //Импортиурем Express для создания сервера
const welbexRouter = require("./routes/welbex.routes"); //Импортируем ротер для обработки запросов
const corsMiddleware = require("./middleware/cors.middleware"); //Импортируем CORS-конфиг
const PORT = process.env.PORT || 8080; //Указываем порт для сервера из переменной окружения (в случае отсутствия использовать явно указанный пот 8080)
const app = express(); //Из Експресса создаём сервер

app.use(express.json()); //Явно указываем серверу парсить JSON-строку
app.use(corsMiddleware); //Передаём серверу CORS-конфиг
app.use("/api", welbexRouter); //Передаём серверу роутер

//Функция для подключения к базе данных и запуска сервера
const start = async () => {
  //Оборовачиваем выполняемый код в try/cath для отлова ошибок
  try {
    //Получаем ссылку подключения к БД из файла настроек

    //Выводим в лог сообщение об успешном запуске сервера
    app.listen(PORT, () => {
      console.log("\nBack-Сервер 'Welbex' запущен [", new Date().toLocaleString("ru-RU", { timeZone: "Europe/Moscow" }), "(МСК)]\nПорт: ", PORT, " \n");

      const twirlTimer = (function () {
        const P = ["\\", "|", "/", "-"];
        let x = 0;
        return setInterval(function () {
          process.stdout.write("\r" + P[x++]);
          x &= 3;
        }, 250);
      })();
    });
  } catch (e) {}
};

//Вызываем функцию старта сервера
start();
