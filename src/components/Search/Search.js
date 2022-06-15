import React from "react";
import "./Search.css";

const Search = () => {
  return (
    <div className="search">
      <div className="search-div">
        <span className="material-icons">pin_drop</span>

        <input type="search" placeholder="Pune, Maharashtra" />
        <span className="material-icons">search</span>
      </div>
    </div>
  );
};

export default Search;
