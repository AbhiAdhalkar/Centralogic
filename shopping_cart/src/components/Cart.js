import React from 'react';
import '../styles/Cart.css';

function Cart({ cartItems, handleRemoveFromCart }) {
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div className='cart'>
      <h2>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className='cart-item'>
                <img src={item.image} alt={item.title} />
                <div className='item-details'>
                  <h3>{item.title}</h3>
                  <p>&#8377;{item.price}</p>
                </div>
                <button name='b1' onClick={() => handleRemoveFromCart(item)}>Remove</button>
              </li>
            ))}
          </ul>
          <div className='cart-total'>
            <h3>Total Price: &#8377;{totalPrice.toFixed(2)}</h3>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
