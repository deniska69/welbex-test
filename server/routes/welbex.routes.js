const Router = require("express"); //Импортиурем роутер из Express
const router = new Router(); //Определяем сам роутер

const controller = require("../controllers/controller"); //Импортируем контроллер для работы с БД

//GET-запрос по ссылке /getWelbexData для получения данных из БД
router.get("/getWelbexData", controller.getWelbex);

module.exports = router;
