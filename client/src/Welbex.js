import React, { useEffect, useState } from 'react'
import { getDataWelbex } from './actions/welbex'
import './Welbex.css'

import Table from './components/Table'
import Pagination from './components/Pagination'

const Welbex = () => {
  const [data, setData] = useState([]) //Данные из БД
  const [isLoading, setIsLoading] = useState(false) //Статус загрузки данных из БД
  // eslint-disable-next-line
  const [currentPageIndex, setCurrentPageIndex] = useState(1) //Индекс текущей страницы
  const countOfRowsPerPage = 10 //Количество строк на странице

  const lastRowIndex = currentPageIndex * countOfRowsPerPage //Индекс последней строки на странице
  const firstRowIndex = lastRowIndex - countOfRowsPerPage //Индекс первой строки на странице
  const currentRows = data.slice(firstRowIndex, lastRowIndex) //Строки на текущей странице

  const paginate = pageIndex => {
    setCurrentPageIndex(pageIndex)
  }

  //Функция загрузки данных из БД
  useEffect(() => {
    //Вызов функции загрузки данных из БД
    const getData = async () => {
      setIsLoading(true)
      const res = await getDataWelbex()
      setData(res)
      setIsLoading(false)
    }

    getData()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="welbex">
      <div className="titleWelbex">
        <h3>WelbeX - Тестовое задание</h3>
      </div>
      {isLoading ? (
        <div className="tableWelbex _shadow">
          <h4>Загрузка данных...</h4>
        </div>
      ) : (
        <Table data={currentRows} isLoading={isLoading} />
      )}
      {!isLoading && <Pagination countOfRowsPerPage={countOfRowsPerPage} totalRows={data.length} paginate={paginate} currentPageIndex={currentPageIndex} />}
      {/* <div className="headerWelbex _shadow"></div>
       */}
    </div>
  )
}

export default Welbex
