import React, { useState } from "react";
import "./Weeklist.css";
import cloud from "../../Images/cloud.png";
import sunny from "../../Images/sunny.png";

const Weeklist = ({ weather: { daily } }) => {
  const [singleList, setSingleList] = useState(daily[0].title);

  const handleSingleListOnclick = (title) => {
    let temp = daily.filter((p) => p.title === title);
    setSingleList(temp);
  };
  console.log(singleList);

  return (
    <div className="weeklist-main-container">
      {daily.map((days, index) => {
        return (
          <div
            onClick={() => handleSingleListOnclick(days.title)}
            key={index + 1}
            className={singleList[0].title === days.title ? "singleList" : ""}
          >
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
