import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
// import CityLists from "./components/CityLists/CityLists";
import Search from "./components/Search/Search";
import Weeklist from "./components/WeekList/Weeklist";
// import { getWeatherAction } from "./Redux/Actions/Actions";

function App() {
  // "lon":76.9681,"lat":29.3889}

  // const dispatch = useDispatch();

  return (
    <div className="App">
      <Search />
      {/* <CityLists /> */}
      <Weeklist />
    </div>
  );
}

export default App;
