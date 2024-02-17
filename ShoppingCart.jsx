// components/ShoppingCart.jsx
import React from 'react';

function ShoppingCart({ cart }) {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            <img src={item.image} alt={item.name} />
            <p>{item.name}</p>
            <p>Quantity: {item.quantity}</p>
            {/* Add increment, decrement, and remove functionality */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;