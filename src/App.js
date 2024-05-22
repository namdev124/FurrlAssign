import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';

// Wishlist button component
const WishlistButton = () => {
  const handleWishlistClick = () => {
    window.location.href = "https://furrl.in/wishlist";
  };

  return (
    <button onClick={handleWishlistClick}>Wishlist</button>
  );
};

// Cart button component
const CartButton = () => {
  const handleCartClick = () => {
    window.location.href = "https://furrl.in/cart";
  };

  return (
    <button onClick={handleCartClick}>Cart</button>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
      <WishlistButton />
      <CartButton />
    </Router>
  );
}

export default App;
