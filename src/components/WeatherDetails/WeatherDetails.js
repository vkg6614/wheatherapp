import React from "react";
import "./WeatherDetails.css";

const WeatherDetails = () => {
  return (
    <div className="weatherDetails-main-container">
      <div className="temp-div">
        <h1>43 C</h1>
        <div>Clear</div>
      </div>
      <div className="weatherDetails-graph-div">
        <div></div>
        <div></div>
      </div>
      <div className="pressure-div">
        <div>
          <p>Pressure</p>
          <p>999 hpa</p>
        </div>
        <div>
          <p>Humidity</p>
          <p>24%</p>
        </div>
      </div>
      <div className="sunrise-div">
        <div>
          <p>Sunrise</p>
          <p>5.22am</p>
        </div>
        <div>
          <p>Sunset</p>
          <p>7.19px</p>
        </div>
      </div>
      <div className="weatherDetails-graph-2"></div>
    </div>
  );
};

export default WeatherDetails;
