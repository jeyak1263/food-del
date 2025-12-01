import React from "react";
import "./Exploremenu.css";
import { menu_list } from "../../assets/assets";

function Exploremenu({ category, setCategory }) {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>

      <p className="explore-menu-text">
        My favorite food is pizza because it is soft, cheesy, and full of
        flavours. I love the crispy crust and the delicious toppings that make
        every bite enjoyable. Whenever I eat pizza, it makes me feel happy and
        satisfied.
      </p>

      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className={`explore-menu-list-item ${
              category === item.menu_name ? "active" : ""
            }`}
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <img src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Exploremenu;
