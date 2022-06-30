import React from 'react'
import { FiChevronsLeft, FiChevronsRight } from 'react-icons/fi'

import './Pagination.css'

const Pagination = ({ countOfRowsPerPage, totalRows, paginate, currentPageIndex }) => {
  const pageNumbers = []

  for (let i = 1; i <= Math.ceil(totalRows / countOfRowsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div className="paginationWelbex _shadow">
      <div className="btn-group btnGroupPagination" role="group" aria-label="Basic example">
        {/* Кнопка предидущей страницы */}
        {currentPageIndex > 1 && (
          <button type="button" className="btn btn-outline-primary" id="btnPaginationPrev" onClick={() => paginate(currentPageIndex - 1)}>
            <FiChevronsLeft />
          </button>
        )}

        {/* Кнопка первой страницы */}
        {currentPageIndex > 1 && (
          <button type="button" className="btn btn-outline-primary" id="btnPaginationFirst" onClick={() => paginate(1)}>
            {1}
          </button>
        )}

        {/* Кнопка текущей страницы */}
        {pageNumbers.length > 0 && (
          <button type="button" className="btn btn-primary" id="btnPaginationOne" onClick={() => paginate(currentPageIndex)}>
            {pageNumbers[currentPageIndex - 1]}
          </button>
        )}

        {/* Кнопка текущей + 1 страницы */}
        {pageNumbers.length > 1 && currentPageIndex < pageNumbers.length && (
          <button type="button" className="btn btn-outline-primary" id="btnPaginationTwo" onClick={() => paginate(currentPageIndex + 1)}>
            {pageNumbers[currentPageIndex]}
          </button>
        )}

        {/* Кнопка текущей + 2 страницы */}
        {pageNumbers.length > 2 && currentPageIndex < pageNumbers.length - 1 && (
          <button type="button" className="btn btn-outline-primary" id="btnPaginationThree" onClick={() => paginate(currentPageIndex + 2)}>
            {pageNumbers[currentPageIndex + 1]}
          </button>
        )}

        {/* Кнопка последней страницы */}
        {pageNumbers.length > 3 && currentPageIndex < pageNumbers.length - 2 && (
          <button type="button" className="btn btn-outline-primary" id="btnPaginationLast" onClick={() => paginate(pageNumbers.length)}>
            {pageNumbers.length}
          </button>
        )}

        {/* Кнопка следующей  страницы */}
        {currentPageIndex < pageNumbers.length && (
          <button type="button" className="btn btn-outline-primary" id="btnPaginationNext" onClick={() => paginate(currentPageIndex + 1)}>
            <FiChevronsRight />
          </button>
        )}
      </div>
    </div>
  )
}

export default Pagination
