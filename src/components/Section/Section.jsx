import React from "react";
import "../Section/Section.css";

function Section() {
  return (
    <div className="header container-fluid">
      <div className="overlay"></div>

      <div className="header-contents col-lg-6 col-md-8 col-12 text-center">
        <h2 className="fw-bold">Order your favorite food here</h2>

        <p className="mt-3">
          My favorite food is pizza because it is soft, cheesy, and full of
          flavours. I love the crispy crust and the delicious toppings that make
          every bite enjoyable. Whenever I eat pizza, it makes me feel happy and
          satisfied.
        </p>

        <button className="btn btn-danger mt-3 px-4 py-2">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Section;
