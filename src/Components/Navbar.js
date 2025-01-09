import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import the useNavigate hook
import '../Navbar.css';
import logo from '../Assets/loogo3.png';


const Navbar = ({ location, searchTerm, handleSearchChange }) => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleCartClick = () => {
    // Directly navigate to the cart page
    navigate('/cart');
  };

  

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>

      <div className="location">
        <i className="fa-solid fa-location-dot"></i>
        <span>{location}</span>
      </div>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search for food, cuisines, or restaurants"
          value={searchTerm} // Bind input value to the searchTerm state
          onChange={handleSearchChange} // Call handleSearchChange on input change
        />
        <button>
          <i className="fas fa-search"></i>
        </button>
      </div>

      <div className="help">
        <a href="#">Help</a>
      </div>

      <div className="sign-in">
        <a href="#" >Sign In</a>
      </div>

      <div className="cartt" onClick={handleCartClick}> {/* Add onClick handler */} 
        <i className="fas fa-shopping-cart"></i>
      </div>
    </nav>
  );
};

export default Navbar;
