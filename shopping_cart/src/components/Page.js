import React from 'react';
import list from '../data';
import '../styles/Page.css';


function Page({ cart, handleAddToCart }) {
  return (
    <div>
      <h1>Product List</h1>
      
      <div className='product-grid'>
        {list.map((product) => (
          <div key={product.id} className='product-item'>
            <img src={product.image} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
