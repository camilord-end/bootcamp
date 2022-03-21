import axios from "axios";
import { useEffect, useState } from "react";
import { Detail } from "./Detail.jsx";

export const Weather = ({ city }) => {
  const [weatherDetails, setWeatherDetails] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d0fe3fb38c782816ee17e6fc97edf3d0`
      )
      .then((response) => {
        setWeatherDetails({
          description: response.data.weather[0].description,
          humidity: response.data.main.humidity,
          temp: response.data.main.temp,
          wind: response.data.wind.speed,
          icon: response.data.weather[0].icon,
        });
      });
  }, []);

  if (weatherDetails === null) {
    return <p>Loading data</p>;
  }

  return (
    <div className="weather-container">
      <h3>Weather</h3>
      <img
        src={`http://openweathermap.org/img/wn/${weatherDetails.icon}@2x.png`}
        alt={weatherDetails.description}
      />
      <Detail text="Description" detail={weatherDetails.description} />
      <Detail text="Humidity" detail={weatherDetails.humidity + "%"} />
      <Detail
        text="Temperature"
        detail={Math.round(weatherDetails.temp - 273) + " C°"}
      />
      <Detail text="Wind speed" detail={weatherDetails.wind + " m/s"} />
    </div>
  );
};
