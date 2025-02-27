import React, { useState } from "react";
import "../styles/SearchBar.css";

const SearchBar = ({ city, setCity }) => {
  const [searchVal, setSearch] = useState("");

  const search = () => {
    let formattedSearch = searchVal.trim().replace(/\s+/g, "+");
    setCity(formattedSearch);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") search();
  };

  return (
    <div className="search-container">
      <input
        type="text"
        value={searchVal}
        onChange={(e) => setSearch(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="Enter city name"
        className="search-input"
      />
      <button onClick={search} className="search-button">
        Search
      </button>
    </div>
  );
};

export default SearchBar;