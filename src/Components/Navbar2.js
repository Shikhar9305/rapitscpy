import React, { useState } from "react";
// import "./Navbar2.css"; // Add styles here if needed

const Navbar2 = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    if (onSearch) {
      onSearch(event.target.value);
    }
  };

  return (
    <div className="nav2">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for food, cuisines.."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>
      <div className="cart">
        <a href="#">
          <i className="fas fa-shopping-cart"></i>
        </a>
      </div>
    </div>
  );
};

export default Navbar2;
