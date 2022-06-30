import './Table.css'

const Table = ({ data }) => {
  return (
    <div className="tableWelbex _shadow">
      <table>
        <thead>
          <tr>
            <th>Дата</th>
            <th>Название</th>
            <th>Количество</th>
            <th>Расстояние</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{new Date(row.date).toLocaleString('ru-RU', { timeZone: 'Europe/Moscow' }).substr(0, 10)}</td>
              <td>{row.name}</td>
              <td>{row.count}</td>
              <td>{row.distance}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
