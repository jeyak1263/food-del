import React from "react";
import "./Exploremenu.css";
import { menu_list } from "../../assets/assets";

function Exploremenu({ category, setCategory }) {
  return (
    <div className="explore-menu container py-5" id="explore-menu">
      <h1 className="text-center">Explore our menu</h1>

      <p className="explore-menu-text text-center mx-auto col-lg-8">
        My favorite food is pizza because it is soft, cheesy, and full of flavours.
        I love the crispy crust and the delicious toppings that make every bite enjoyable.
      </p>

      {/* Horizontal Scrollable List */}
      <div className="scroll-menu mt-4">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className={`scroll-item ${
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
