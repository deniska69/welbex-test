const Pool = require('pg').Pool //Импортируем драйвер подключения к БД PostgreSQL

//Конфиг подключения к БД
const pool = new Pool({
  user: 'postgres',
  password: 'f2Gsfg2',
  host: 'localhost',
  port: 5432,
  database: 'welbex_test',
})

module.exports = pool
