import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import CartModal from '../../components/cart/CartModal';


const Home = () => {
  // Стэйты для изменения состояния cards
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch('/data.json')
      .then(response => response.json())
      .then(data => setCards(data))
      .catch(error => console.error('Ошибка при получении данных:', error));
  }, []);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div>

      <Header openCart={openCart} />

      <div className="home-container">
    
      <div className='banner'>
        <div className='banner-text'>
          <p className='banner-title'>Праздничная распродажа</p>
          <p className='banner-description'>Скидки до 70%</p>
        </div>
          <img className='banner-img' src='https://hobbypark.kg/upload/iblock/aa7/w30m7y3vkseftzxdtok4ghfxzdpsccrz.jpg' />
      </div>

        <main className="main-container">
          {cards.map(card => (
            <Link to={`/product/${card.id}`} key={card.id} className="product-link">
              <div className="card">
                <img src={card.image} alt={card.alt} className="card-image" />
                <p className="card-text">{card.price} сом</p>
              </div>
            </Link>
          ))}
        </main>
      </div>

      <Footer />

      <CartModal isCartOpen={isCartOpen} closeCart={closeCart} />

    </div>
  );
};

export default Home;