import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import Search from "./components/Search/Search";
import { getWeatherAction } from "./Redux/Actions/Actions";

function App() {
  const dispatch = useDispatch();
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
      dispatch(getWeatherAction(latitude, longitude));
    });
  }, [dispatch, latitude, longitude]);

  return (
    <div className="App">
      <Search />
    </div>
  );
}

export default App;
