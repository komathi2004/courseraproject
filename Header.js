import React from 'react';
import { Link } from 'react-router-dom';

function Header({ cartItems }) {
  return (
    <header style={headerStyle}>
      <h1>Shopping Site</h1>
      <nav>
        <Link to="/">Products</Link>
        <Link to="/cart">
          <div style={cartStyle}>
            <span>🛒</span>
            <span>{cartItems}</span> {/* Total number of items in cart */}
          </div>
        </Link>
      </nav>
    </header>
  );
}

const headerStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#f8f9fa',
};

const cartStyle = {
  display: 'flex',
  alignItems: 'center',
};

export default Header;
