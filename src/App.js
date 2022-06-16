import { useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import Weeklist from "./components/WeekList/Weeklist";
import getFormattedWeatherData from "./services/WeatherServices";

function App() {
  const [query, setQuery] = useState({ q: "Panipat" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);

  useState(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query]);

  console.log(weather);

  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
      function success(position) {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      function error(error_message) {
        console.error(
          "An error has occured while retrieving location",
          error_message
        );
      }
    );
  } else {
    console.log("geolocation is not enabled on this browser");
  }

  return (
    <div className="App">
      <Search />

      {weather && (
        <div>
          <Weeklist weather={weather} />
          <WeatherDetails weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
