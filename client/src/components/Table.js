import './Table.css'

const Table = ({ data }) => {
  console.log(typeof data)
  console.log(data)

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
              <td>{row.date}</td>
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
