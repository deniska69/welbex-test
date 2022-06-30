const db = require('../db') //Импортируем конфиг подключения к БД

//Контроллер для работы с БД
class WelbexController {
  async getWelbex(req, res) {
    try {
      const data = await db.query('SELECT * FROM welbex') //Выполняем запрос к БД
      res.json(data.rows) //Возвращаем массив всех строк в виде JSON
    } catch (e) {
      console.log(e)
      return res.status(400).json({ message: 'Ошибка получения данных из БД.' })
    }
  }
}

module.exports = new WelbexController()
