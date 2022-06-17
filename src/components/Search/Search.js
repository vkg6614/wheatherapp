import React, { useEffect, useState } from "react";
import "./Search.css";

const Search = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  useEffect(() => {
    findLocation();
  }, []);

  const findLocation = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        function success(position) {
          let lat = position.coords.latitude;
          let lon = position.coords.longitude;
          setQuery({ lat, lon });
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
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (city !== "") {
        setQuery({ q: city });
      }
      setCity("");
    }
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
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <span className="material-icons">search</span>
      </div>
    </div>
  );
};

export default Search;
