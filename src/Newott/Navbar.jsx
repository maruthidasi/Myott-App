import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">MyOTT💻</div>

      <ul className="navbar-links">
      <li><Link to="/home">Home</Link></li>
        <li><Link to="/movies">Movies</Link></li>
        <li><Link to="/series">Series</Link></li>
        <li><Link to="/categories">Categories</Link></li>
      </ul>

      <div className="navbar-right">
        <div className="profile-dropdown">
          <button className="navbar-btn1" onClick={toggleDropdown}>
            Profile ▾
          </button>
          {isDropdownOpen && (
            <div className="dropdown-menu">
              <Link to="/account">My Account</Link>
              <Link to="/settings">Settings</Link>
              <Link to="/signup">Log Out</Link>
            </div>
          )}
        </div>
        <Link to="/subscribe" className="navbar-btn">Subscription</Link>
      <Link to="/signup" className="navbar-btn">SignUp</Link>
      <Link to="/contact" className="navbar-btn">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
