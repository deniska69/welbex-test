import React, { useEffect, useState } from 'react'
import { getDataWelbex } from './actions/welbex'
import './Welbex.css'

import Table from './components/Table'

const Welbex = () => {
  // eslint-disable-next-line
  const [data, setData] = useState([]) //Данные из БД
  // eslint-disable-next-line
  const [isLoading, setIsLoading] = useState(false)
  // eslint-disable-next-line
  const [currentPage, setCurrentPage] = useState(1) //Данные из БД
  // eslint-disable-next-line
  const countOfRowsPerPage = 10 //Количество строк на странице

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
        <Table data={data} isLoading={isLoading} />
      )}
      {/* <div className="headerWelbex _shadow"></div>
      <div className="footerWelbex _shadow"></div> */}
    </div>
  )
}

export default Welbex
