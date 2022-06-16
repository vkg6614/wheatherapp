import React from "react";
import Cities from "../Cities/Cities";
import "./CityLists.css";

const CityLists = () => {
  return (
    <div>
      {Cities.map((currElem) => (
        <div>
          <div>
            <p>{currElem.city}</p>
            <p>{currElem.state}</p>
          </div>
          <div></div>
        </div>
      ))}
    </div>
  );
};

export default CityLists;
