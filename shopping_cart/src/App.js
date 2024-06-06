import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Page from "./components/Page";
import Cart from "./components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const handleRemoveFromCart = (productToRemove) => {
    setCart(cart.filter(product => product.id !== productToRemove.id));
  };

  return (
    <Router>
      <Navigation />
      <Routes>
        <Route 
          path="/" 
          element={<Page cart={cart} handleAddToCart={handleAddToCart} />} 
        />
        <Route 
          path="/cart" 
          element={<Cart cartItems={cart} handleRemoveFromCart={handleRemoveFromCart} />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
