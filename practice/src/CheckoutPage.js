import React from 'react';

const CheckoutPage = ({ cart }) => {
  return (
    <div>
      <h2>Checkout Page</h2>
      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>Quantity: {item.quantity}</p>
          <p>Price: ${item.quantity * item.price}</p>
        </div>
      ))}
      <p>Total Price: ${cart.reduce((total, item) => total + item.quantity * item.price, 0)}</p>
      <button>Confirm Order</button>
    </div>
  );
};

export default CheckoutPage;
