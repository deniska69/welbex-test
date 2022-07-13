import './Filter.css'

const Filter = ({ filterColumn, setFilterColumn, filterCondition, setFilterCondition, filterValue, setFilterValue }) => {
  return (
    <div className="filterWelbex _shadow">
      <h6 className="filterText">Фильтр:</h6>
      <div>
        <button className="btn btn-outline-primary dropdown-toggle filterBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {filterColumn}
        </button>
        <ul className="dropdown-menu filterColumn">
          <li>
            <div className="dropdown-item" onClick={() => setFilterColumn('Название')}>
              Название
            </div>
          </li>
          <li>
            <div className="dropdown-item" onClick={() => setFilterColumn('Количество')}>
              Количество
            </div>
          </li>
          <li>
            <div className="dropdown-item" onClick={() => setFilterColumn('Растояние')}>
              Растояние
            </div>
          </li>
        </ul>
      </div>

      <select className="form-select" aria-label="Пример выбора по умолчанию" defaultValue={filterColumn} onChange={e => setFilterColumn(e.target.value)}>
        <option value="">Выберите столбец...</option>
        <option value="name">Название</option>
        <option value="count">Количество</option>
        <option value="distance">Растояние</option>
      </select>

      <div>
        <button className="btn btn-outline-primary dropdown-toggle filterBtn" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {filterCondition}
        </button>
        <ul className="dropdown-menu filterCondition">
          <li>
            <div className="dropdown-item" onClick={() => setFilterCondition('=')}>
              =
            </div>
          </li>
          <li>
            <div className="dropdown-item" onClick={() => setFilterCondition('содержит')}>
              содержит
            </div>
          </li>
          <li>
            <div className="dropdown-item" onClick={() => setFilterCondition('>')}>
              {'>'}
            </div>
          </li>
          <li>
            <div className="dropdown-item" onClick={() => setFilterCondition('<')}>
              {'<'}
            </div>
          </li>
        </ul>
      </div>

      <div>
        <input className="form-control" type="text" placeholder="" aria-label="" value={filterValue} onChange={e => setFilterValue(e.target.value)}></input>
      </div>
    </div>
  )
}

export default Filter
