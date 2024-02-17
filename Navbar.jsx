// components/Navbar.jsx
import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        {/* Add search functionality here */}
      </div>
      <div className="category-filter">
        {/* Add category filter options here */}
      </div>
    </nav>
  );
}

export default Navbar;