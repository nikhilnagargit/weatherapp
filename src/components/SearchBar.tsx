import React from "react";

const SearchBar: React.FC = () => {
  return (
    <form className="searchbar">
      <input type="text" placeholder="Search Location" className="searchbar" />
      <button type="submit">
        <span>hi</span>
      </button>
    </form>
  );
};

export default SearchBar;
