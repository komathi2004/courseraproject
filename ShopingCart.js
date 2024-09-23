// src/ShoppingCart.js
import React, { useState } from 'react';
import './ShopingCart.css'; // Import styles

const ShoppingCart = () => {
    // Sample data for plants in the cart
    const [cartItems, setCartItems] = useState([
        { id: 1, name: 'Fern', unitPrice: 15, quantity: 1, thumbnail: 'path/to/fern.jpg' },
        { id: 2, name: 'Cactus', unitPrice: 10, quantity: 1, thumbnail: 'path/to/cactus.jpg' },
    ]);

    // Calculate total items and total cost
    const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    const totalCost = cartItems.reduce((acc, item) => acc + item.unitPrice * item.quantity, 0);

    const increaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id ? { ...item, quantity: item.quantity + 1 } : item
            )
        );
    };

    const decreaseQuantity = (id) => {
        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === id && item.quantity > 0 ? { ...item, quantity: item.quantity - 1 } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    };

    return (
        <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            <p>Total Plants: {totalItems}</p>
            <p>Total Cost: ${totalCost}</p>

            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <img src={item.thumbnail} alt={item.name} />
                        <h3>{item.name}</h3>
                        <p>Price: ${item.unitPrice}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button onClick={() => increaseQuantity(item.id)}>+</button>
                        <button onClick={() => decreaseQuantity(item.id)}>-</button>
                        <button onClick={() => removeItem(item.id)}>Delete</button>
                    </div>
                ))}
            </div>

            <button className="checkout-button">Checkout (Coming Soon)</button>
            <a href="/product-listing" className="continue-shopping">Continue Shopping</a>
        </div>
    );
};

export default ShoppingCart;
