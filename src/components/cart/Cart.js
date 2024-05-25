import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, total } = useContext(CartContext);

  return (
    <div>
      <Header />
      <main className="cart-container">
        <h2 className="cart-title">Корзина</h2>
        {cart.length === 0 ? (
          <p>Ваша корзина пуста</p>
        ) : (
          <>
            <ul className="cart-items">
              {cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.image} alt={item.alt} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <p>{item.text}</p>
                    <button className="cart-item-remove" onClick={() => removeFromCart(index)}>Удалить</button>
                  </div>
                  <p className="cart-item-price">${item.price}</p>
                </li>
              ))}
            </ul>
            <div className="cart-total">
              <h3>Итог:</h3>
              <p>${total}</p>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Cart;