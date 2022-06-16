import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Search.css";
import axios from "axios";
import {
  getLatLonWeatherAction,
  getWeatherAction,
} from "../../Redux/Actions/Actions";

const Search = () => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const dispatch = useDispatch();
  const { weatherData, loading } = useSelector((state) => state.weatherReducer);
  const [city, setCity] = useState(weatherData ? weatherData.name : "Panipat");
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });
    if (latitude) {
      dispatch(getLatLonWeatherAction(latitude, longitude));
    }
  }, [latitude, longitude, dispatch]);

  const handlesearchOnChange = (e) => {
    const { value } = e.target;
    setCity(value);
    dispatch(getWeatherAction(value));
  };

  return (
    <div className="search">
      <div className="search-div">
        <span className="material-icons">pin_drop</span>

        <input
          type="search"
          placeholder="search"
          name="search"
          value={city}
          onChange={handlesearchOnChange}
        />
        <span className="material-icons">search</span>
      </div>
    </div>
  );
};

export default Search;
