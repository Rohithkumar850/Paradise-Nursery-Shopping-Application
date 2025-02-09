import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/actions/cartActions';

const ProductListing = ({ plants }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (plant) => {
    dispatch(addToCart(plant));
  };

  return (
    <div className="product-listing">
      {plants.map((plant) => (
        <div className="product" key={plant.id}>
          <img src={plant.thumbnail} alt={plant.name} />
          <h2>{plant.name}</h2>
          <p>${plant.price}</p>
          <button onClick={() => handleAddToCart(plant)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductListing;
