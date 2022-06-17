import { useEffect, useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import WeatherDetails from "./components/WeatherDetails/WeatherDetails";
import Weeklist from "./components/WeekList/Weeklist";
import getFormattedWeatherData from "./services/WeatherServices";

function App() {
  const [weather, setWeather] = useState(null);
  const [query, setQuery] = useState({ q: "Panipat" });

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormattedWeatherData(query).then((data) => {
        setWeather(data);
      });
    };

    fetchWeather();
  }, [query]);

  console.log(weather, "wheate");
  return (
    <div className="App">
      <Search setQuery={setQuery} />

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
