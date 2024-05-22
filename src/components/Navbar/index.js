import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/wishlist">Wishlist</Link>
      <Link to="/cart">Cart</Link>
    </nav>
  );
}

export default Navbar;
