export const Filter = ({handler,filter}) => {
  return (
    <div className="filter-container">
        Search: <input onChange={handler} value={filter} />
    </div>
  )
}
