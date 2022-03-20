export const CountryTittle = ({ name, flag }) => {
  return (
    <div className="country-tittle">
      <h3>
        {name} <span>{flag}</span>
      </h3>
    </div>
  );
};
