import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateQuantity } from '../redux/actions/cartActions';

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleQuantityChange = (id, delta) => {
    const item = cartItems.find(item => item.id === id);
    const newQuantity = item.quantity + delta;
    dispatch(updateQuantity(id, newQuantity));
  };

  const totalCost = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty!</p>
      ) : (
        cartItems.map(item => (
          <div key={item.id} className="cart-item">
            <img src={item.thumbnail} alt={item.name} />
            <h2>{item.name}</h2>
            <p>${item.price}</p>
            <div className="quantity">
              <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </div>
            <button onClick={() => handleRemove(item.id)}>Remove</button>
          </div>
        ))
      )}
      <h3>Total Cost: ${totalCost}</h3>
      <button>Checkout (Coming Soon)</button>
      <button>Continue Shopping</button>
    </div>
  );
};

export default CartPage;
