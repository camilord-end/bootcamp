import { Borders } from "./Borders";
import { Languages } from "./Languages";

export const CountryDetails = ({
  name,
  capital,
  languages,
  region,
  subregion,
  flag,
  area,
  population,
  borders,
}) => {
  return (
    <div className={`${name.toLowerCase()}-container`}>
      <h3>
        {name} <span>{flag}</span>
      </h3>
      <p>Capital: {capital}</p>
      <p>Population: {population}</p>
      <p>Region: {region}</p>
      <p>SubRegion: {subregion}</p>
      <p>Area: {area}</p>
      <Borders borders={borders} />
      <Languages languages={languages} />
    </div>
  );
};
