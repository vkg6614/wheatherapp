import { useEffect, useState } from "react";
import "./App.css";
import Cities from "./components/Cities/Cities";
import CityLists from "./components/CityLists/CityLists";
import Search from "./components/Search/Search";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import Weeklist from "./components/WeekList/Weeklist";
import getFormattedWeatherData from "./services/WeatherServices";

function App() {
  const [weather, setWeather] = useState(null);
  const [units, setUnits] = useState("metric");
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [query, setQuery] = useState({ q: "Panipat" });

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query, units]);

  console.log(weather, "wheate");
  return (
    <div className="App">
      <Search setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <CityLists />
          <Weeklist weather={weather} />
          <WeatherDetails weather={weather} />
        </div>
      )}
    </div>
  );
}

export default App;
