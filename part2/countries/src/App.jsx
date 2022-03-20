import { useState, useEffect } from "react";
import axios from "axios";
import { Tittle } from "./components/Tittle";
import { Filter } from "./components/Filter";
import { CountryDetails } from "./components/CountryDetails";
import { CountryList } from "./components/CountryList";

function App() {
  const [input, setInput] = useState("");
  const [countries, setCountries] = useState([]);
  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      setCountries(response.data);
    });
  }, []);

  const filteredData = () => {
    return countries.filter((country) => {
      if (country.name.common.toLowerCase().includes(input.toLowerCase())) {
        return true;
      }
    });
  };

  return (
    <div className="app-container">
      <Tittle text="Country Info DB" />
      <Filter handler={handleInputChange} value={input} />
      <div className="results-container">
        <h2 className="results-title">Results: </h2>
        {filteredData().length < 10 && filteredData().length > 1
          ? filteredData().map((country) => {
              return (
                <div key={country.name.common} className="country">
                  <CountryList data={country} />
                </div>
              );
            })
          : filteredData().length === 1
          ? filteredData().map((country) => {
              return (
                <CountryDetails
                  key={country.ccn3}
                  name={country.name.common}
                  capital={country.capital}
                  languages={country.languages}
                  flag={country.flag}
                  region={country.region}
                  subregion={country.subregion}
                  area={country.area}
                  population={country.population}
                />
              );
            })
          : "Search country names (english)"}
      </div>
    </div>
  );
}

export default App;
