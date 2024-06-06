import React, { useState } from 'react';

const ProductListingPage = ({ products, addToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = (product) => {
    addToCart({ ...product, quantity });
    setQuantity(1);
  };

  return (
    <div>
      <h2>Product Listing Page</h2>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <button onClick={() => handleAddToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListingPage;
