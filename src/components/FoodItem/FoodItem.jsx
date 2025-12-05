import React, { useContext } from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../Exploremenu/Context/StoreContext';

const FoodItem = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className='food-item-container'>

        <img src={image} alt={name} className='food-item-image' />

        {/* Ternary fixed */}
        {!cartItems[id] ? (
          <img
            src={assets.add_icon_white}
            onClick={() => addToCart(id)}
            className="add"
            alt="add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => removeFromCart(id)}
              className="counter-icon"
              alt="remove"
            />
            <span>{cartItems[id]}</span>
            <img
              src={assets.add_icon_green}
              onClick={() => addToCart(id)}
              className="counter-icon"
              alt="add"
            />
          </div>
        )}

      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="rating" />
        </div>

        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>₹{price}</p>
      </div>

    </div>
  );
};

export default FoodItem;
