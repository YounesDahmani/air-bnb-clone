import React from "react";

const SearchBar = () => {
  return (
    <div className="searchbar">
      <label htmlFor="destination">
        Destination
        <input
          type="text"
          id="destination"
          placeholder="Recherchez des destinations"
        />
      </label>
    </div>
  );
};

export default SearchBar;
