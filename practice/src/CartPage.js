import React from 'react';

const CartPage = ({ cart }) => {
  return (
    <div>
      <h2>Cart Page</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.price}</p>
        </div>
      ))}
      <p>Total Quantity: {cart.reduce((total, item) => total + item.quantity, 0)}</p>
      <p>Total Price: ${cart.reduce((total, item) => total + item.quantity * item.price, 0)}</p>
    </div>
  );
};

export default CartPage;
