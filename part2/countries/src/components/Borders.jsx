export const Borders = ({borders=[]}) => {
  return (
    <div className="borders-container">
      <p>Borders: </p>
      <ul>
        {borders.map((b) => {
          return <li key={b}>{b}</li>;
        })}
      </ul>
    </div>
  )
}
