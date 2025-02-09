import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
  const itemsInCart = useSelector(state => state.cart.items.length);

  return (
    <header>
      <h1>Plant Shop</h1>
      <nav>
        <Link to="/">Product Listing</Link>
        <Link to="/cart">
          <div className="cart-icon">
            🛒 ({itemsInCart})
          </div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
