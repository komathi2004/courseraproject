import React from 'react';

function Cart() {
  return (
    <div style={cartPageStyle}>
      <h2>Your Shopping Cart</h2>
      <p>No items in the cart yet.</p>
    </div>
  );
}

const cartPageStyle = {
  padding: '20px',
};

export default Cart;
