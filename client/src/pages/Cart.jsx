import React from 'react';
import { useCart } from '../context/CartContext';
import './cart.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cartItems.length === 0) {
    return <div className="cart-page empty">Your cart is empty.</div>;
  }

  return (
    <div className="cart-page">
      <h1>Your Shopping Cart</h1>
      <div className="cart-items">
        {cartItems.map((item, index) => (
          <div className="cart-item" key={`${item.id}-${item.size}`}>
            <img src={item.image} alt={item.name} />
            <div>
              <h3>{item.name}</h3>
              <p>Size: {item.size}</p>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price.toFixed(2)}</p>
              <p>Total: ${(item.price * item.quantity).toFixed(2)}</p>
              <button onClick={() => removeFromCart(item.id, item.size)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-summary">
        <h2>Total: ${totalPrice.toFixed(2)}</h2>
        <button className="clear-btn" onClick={clearCart}>Clear Cart</button>
        <button className="checkout-btn">Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
