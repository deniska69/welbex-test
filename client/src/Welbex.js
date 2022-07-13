import React, { useEffect, useState } from 'react'
import { getDataWelbex } from './actions/welbex'
import './Welbex.css'

import Filter from './components/Filter'
import Table from './components/Table'
import Pagination from './components/Pagination'

const Welbex = () => {
  const [dataInput, setDataInput] = useState([]) //Данные из БД
  const [dataOutput, setDataOutput] = useState([]) //Данные из БД
  const [isLoading, setIsLoading] = useState(false) //Статус загрузки данных из БД
  const [currentPageIndex, setCurrentPageIndex] = useState(1) //Индекс текущей страницы
  const countOfRowsPerPage = 10 //Количество строк на странице

  const lastRowIndex = currentPageIndex * countOfRowsPerPage //Индекс последней строки на странице
  const firstRowIndex = lastRowIndex - countOfRowsPerPage //Индекс первой строки на странице
  const currentRows = dataOutput.slice(firstRowIndex, lastRowIndex) //Строки на текущей странице

  const [filterColumn, setFilterColumn] = useState('')
  const [filterCondition, setFilterCondition] = useState('')
  const [filterValue, setFilterValue] = useState('')

  //Функция для пагинации страниц
  const paginate = pageIndex => {
    setCurrentPageIndex(pageIndex)
  }

  //Хук для загрузки данных из БД
  useEffect(() => {
    //Вызов функции загрузки данных из БД
    const getData = async () => {
      setIsLoading(true)
      const res = await getDataWelbex()
      setDataInput(res)
      setDataOutput(res)
      setIsLoading(false)
    }

    getData()

    // setFilterColumn('Столбец')
    // setFilterCondition('Условие')

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    filter()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterColumn, filterColumn, filterValue])

  // //Хук для отслеживания изменений в стейтах
  // useEffect(() => {
  //   filter()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filterColumn])

  // //Хук для отслеживания изменений в стейтах
  // useEffect(() => {
  //   filter()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filterCondition])

  // //Хук для отслеживания изменений в стейтах
  // useEffect(() => {
  //   filter()
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [filterValue])

  const filter = () => {
    if (filterColumn !== '' && filterCondition !== '' && filterValue !== '') {
      const arr = []
      let column = ''
      let condition = filterCondition
      let value = filterValue

      if (filterColumn === 'Название') {
        column = 'name'
      } else if (filterColumn === 'Количество') {
        column = 'count'
      } else if (filterColumn === 'Растояние') {
        column = 'distance'
      }

      console.log('filterColumn', filterColumn)
      console.log('filterCondition', filterCondition)
      console.log('filterValue', filterValue)
      console.log('column', column)
      console.log('condition', condition)
      console.log('value', value)

      // console.log('До фильтрации:')
      // console.log(dataOutput)

      //for (let i = 0; i < dataOutput.length; i++) {
      // for (let i = 0; i < dataOutput.length; i++) {
      //   if (condition === '=' && dataOutput[column] === value) {
      //     arr.push(i)
      //   } else if (condition === 'содержит' && dataOutput[column].indexOf(value) !== -1) {
      //     arr.push(i)
      //   } else if (condition === '>' && dataOutput[column] > value) {
      //     arr.push(i)
      //   } else if (condition === '<' && dataOutput[column] < value) {
      //     arr.push(i)
      //   }
      // }

      //setDataOutput(arr)
      // console.log('После фильтрации:')
      // console.log(dataOutput)
    } else {
      //setDataOutput(dataInput)
    }
  }

  return (
    <div className="welbex">
      <div className="titleWelbex">
        <h3>WelbeX - Тестовое задание</h3>
      </div>
      {!isLoading && (
        <Filter
          filter={filter}
          filterColumn={filterColumn}
          setFilterColumn={setFilterColumn}
          filterCondition={filterCondition}
          setFilterCondition={setFilterCondition}
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
      )}
      {isLoading ? (
        <div className="tableWelbex _shadow">
          <h4>Загрузка данных...</h4>
        </div>
      ) : (
        <Table data={currentRows} isLoading={isLoading} />
      )}
      {!isLoading && <Pagination countOfRowsPerPage={countOfRowsPerPage} totalRows={dataOutput.length} paginate={paginate} currentPageIndex={currentPageIndex} />}
    </div>
  )
}

export default Welbex
