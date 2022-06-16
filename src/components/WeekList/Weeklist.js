import React from "react";
import "./Weeklist.css";
import cloud from "../../Images/cloud.png";
import sunny from "../../Images/sunny.png";

const Weeklist = ({ weather: { daily } }) => {
  return (
    <div className="weeklist-main-container">
      {daily.map((days, index) => {
        return (
          <div key={index + 1}>
            <p>{days.title}</p>
            <div>
              <span>{Math.floor(days.max)} °</span>
              <span>{Math.floor(days.min)} °</span>
            </div>
            <div>
              <img
                src={
                  days.type === "Haze" || days.type === "Clear" ? sunny : cloud
                }
                alt="cloud"
              />
            </div>
            <p>{days.type}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Weeklist;
