import React from 'react';

function ProductList({ addToCart }) {
  return (
    <div style={productListStyle}>
      <h2>Products</h2>
      <div style={productStyle}>
        <p>Product 1</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
      <div style={productStyle}>
        <p>Product 2</p>
        <button onClick={addToCart}>Add to Cart</button>
      </div>
    </div>
  );
}

const productListStyle = {
  padding: '20px',
};

const productStyle = {
  marginBottom: '20px',
};

export default ProductList;
