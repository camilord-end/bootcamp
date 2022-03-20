import { useState } from "react";
import { CountryDetails } from "./CountryDetails";

export const CountryList = ({ data }) => {
  const [displayDetails, setDisplayDetails] = useState(false);

  const handleDisplay = () => {
    setDisplayDetails(!displayDetails);
  };

  return (
    <>
      <p className="item">
        {data.name.common}
        <button onClick={handleDisplay}>Show details</button>
      </p>
      <div className="country-details">
        {displayDetails && (
          <CountryDetails
            key={data.ccn3}
            name={data.name.common}
            capital={data.capital}
            languages={data.languages}
            flag={data.flag}
            region={data.region}
            subregion={data.subregion}
            area={data.area}
            population={data.population}
            borders={data.borders}
          />
        )}
      </div>
    </>
  );
};
