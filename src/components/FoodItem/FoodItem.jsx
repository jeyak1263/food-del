import React, { useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets';

const FoodItem = ({ id, name, price, description, image }) => {

  const [itemCount, setItemCount] = useState(0);

  return (
    <div className='food-item'>
      <div className='food-item-container'>

        <img src={image} alt={name} className='food-item-image' />

        {!itemCount ? (
          <img
            src={assets.add_icon_white}
            onClick={() => setItemCount(prev => prev + 1)}
            className="add"
            alt="add"
          />
        ) : (
          <div className="food-item-counter">
            <img
              src={assets.remove_icon_red}
              onClick={() => setItemCount(prev => Math.max(prev - 1, 0))}
              className="counter-icon"
              alt="remove"
            />
            <span>{itemCount}</span>
            <img
              src={assets.add_icon_green}
              onClick={() => setItemCount(prev => prev + 1)}
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
  )
}

export default FoodItem;
