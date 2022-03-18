export const Filter = ({ handler, value }) => {
  return (
    <div className="filter-container">
      Country:{" "}
      <input
        type="text"
        onChange={handler}
        placeholder="country name to filter"
        value={value}
      />
    </div>
  );
};
