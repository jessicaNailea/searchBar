import React from "react";
import "./searchBox.scss";

const SearchBox = ({ value, onChange }) => {
  return (
    <input
      type="text"
      className="searchBox-input"
      placeholder="Search..."
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default SearchBox;
