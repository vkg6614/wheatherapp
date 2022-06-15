import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./Search.css";

const Search = () => {
  //   const [city, setCity] = useState("");
  const { weatherData, loading } = useSelector((state) => state.weatherReducer);
  // console.log(weatherData, loading);
  const handlesearchOnChange = (e) => {
    const { value } = e.target;
  };

  return (
    <div className="search">
      <div className="search-div">
        <span className="material-icons">pin_drop</span>

        <input
          type="search"
          placeholder="Pune, Maharashtra"
          name="search"
          onChange={handlesearchOnChange}
        />
        <span className="material-icons">search</span>
      </div>
    </div>
  );
};

export default Search;
