import React from "react";
import "./Search.css";

const Search = () => {
  const handlesearchOnChange = (e) => {
    console.log(e, "on");
  };

  return (
    <div className="search">
      <div className="search-div">
        <span className="material-icons">pin_drop</span>

        <input
          type="search"
          placeholder="search"
          name="search"
          onChange={handlesearchOnChange}
        />
        <span className="material-icons">search</span>
      </div>
    </div>
  );
};

export default Search;
