import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './ProductDetail.css';
import { CartContext } from '../../context/CartContext';
import CartModal from '../../components/cart/CartModal';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const { addToCart } = useContext(CartContext);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  useEffect(() => {
    // Тут загрузка данных продукта
    fetch('/data.json')
      .then(response => response.json())
      .then(data => {
        const productData = data.find(item => item.id === parseInt(productId));
        setProduct(productData);
      })
      .catch(error => console.error('Ошибка при получении продуктов::', error));
  }, [productId]);

  // Тут проверка на наличие продуктов
  // ( Если продукт есть то выводи если нет то Loading... )
  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Header openCart={openCart} />
      <main className="product-detail-container">
        <section className="product-detail">

          <div className="product-wrapper">
            <img src={product.image} alt={product.alt} className="product-image" />
            <div>
                <h2>Подробное описание продукта</h2>
                <p className="product-title">{product.details}</p>
            </div>
          </div>

          <div className="product-info">

          <p className="product-details">{product.name}</p>
            <div className="product-wrapper-cart">
            <h3 className="product-text">{product.price} сом</h3>
            <button onClick={() => addToCart(product)} className="add-to-cart-button">Добавить в корзину</button>
            </div>
          </div>

        </section>
      </main>
      <Footer />
      
      <CartModal isCartOpen={isCartOpen} closeCart={closeCart} />
    </div>
  );
};

export default ProductDetail;