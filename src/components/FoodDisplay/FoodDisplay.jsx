import React, { useContext } from "react";
import { StoreContext } from "../../components/Exploremenu/Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodDisplay.css";  

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext);

  return (
    <div className="food_display" id="food-display">
      <h2>Top dishes near you</h2>

      <div className="food_list_container">
        {food_list
          .filter((item) => category === "All" || item.category === category)
          .map((item) => (
            <FoodItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              description={item.description}
              price={item.price}
            />
          ))}
      </div>
    </div>
  );
}

export default FoodDisplay;
