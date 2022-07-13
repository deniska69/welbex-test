import axios from 'axios' //Импортируем Axios для выполнения HTTP-запросов
import { API_URL } from '../core/config'; //URL Back-сервера

//Функция получения данных из БД
export const getDataWelbex = async () => {
  //Оборовачиваем выполняемый код в try/cath для отлова ошибок
  try {
    const { data } = await axios.get(`${API_URL}api/getWelbexData`) //Отправка асинхронного GET-запроса на серверную часть
    return data //Возвращаем полученные данные
  } catch (e) {
    alert('Произошла ошибка во время получения данных из БД')
    console.log(e) //В случае ошибки выводим уведомление
  }
}
