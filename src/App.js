import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import ProductDetail from './components/ProductDetail/ProductDetail';
import Cart from './components/cart/Cart';
import { CartProvider } from './context/CartContext';
import './App.css'

const App = () => {
  return (
    <CartProvider>
      <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
    </CartProvider>
  );
};

export default App;