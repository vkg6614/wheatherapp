import React from "react";
import "./WeatherDetails.css";
import cloud from "../../Images/cloud.png";
import sunny from "../../Images/sunny.png";
import { formatToLocalTime } from "../../services/WeatherServices";
import {
  ResponsiveContainer,
  LineChart,
  Tooltip,
  Line,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

const WeatherDetails = ({
  weather,
  weather: { sunrise, sunset, main, temp, humidity, pressure, timezone },
}) => {
  console.log(weather, "we");
  return (
    <div className="weatherDetails-main-container">
      <div className="temp-div">
        <h1>{Math.floor(temp)}°C</h1>
        <div>
          <img
            src={main === "Haze" || main === "Clear" ? sunny : cloud}
            alt="cloud"
          />
        </div>
      </div>
      <div className="weatherDetails-graph-div">
        <ResponsiveContainer>
          <LineChart data={weather.hourly}>
            <CartesianGrid />
            <XAxis width={2} dataKey="title" interval={"preserveStartEnd"} />
            <YAxis />
            <Tooltip contentStyle={{ fontWeight: "bold" }} />
            <Legend />
            <Line type="monotone" dataKey="temp" activeDot={{ r: 8 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="pressure-div">
        <div>
          <p>Pressure</p>
          <p>{pressure} hpa</p>
        </div>
        <div>
          <p>Humidity</p>
          <p>{humidity}%</p>
        </div>
      </div>
      <div className="sunrise-div">
        <div>
          <p>Sunrise</p>
          <p>{formatToLocalTime(sunrise, timezone, "hh:mm")}am</p>
        </div>
        <div>
          <p>Sunset</p>
          <p>{formatToLocalTime(sunset, timezone, "hh:mm")}pm</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDetails;
