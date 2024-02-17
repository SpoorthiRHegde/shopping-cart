// App.jsx
import React, { useState } from 'react';
import './App.css';

import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ShoppingCart from './components/ShoppingCart';

import aaa from './aaa.jpg'; // Import your images
import bbb from './bbb.jpg';
import ccc from './ccc.jpg';
import ddd from './ddd.jpg';

function App() {
  const [products, setProducts] = useState([
    { id: 1, name: "Vacheron Constantin", info: "Complications, design, workmanship and heritage. ", price: 10, image: aaa },
    { id: 2, name: "Casual Shirt", info: "Shirts are a staple fashion in every man's wardrobe.", price: 20, image: bbb },
    { id: 3, name: "Braclet", info: "Worn on the hands or wrists of men and women.", price: 30, image: ccc },
    { id: 4, name: "Akro Bake", info: "Amber Vanilla fragrance for women and men.", price: 40, image: ddd },
  ]);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-container">
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          ))}
        </div>
        <ShoppingCart cart={cart} />
      </div>
    </div>
  );
}

export default App;