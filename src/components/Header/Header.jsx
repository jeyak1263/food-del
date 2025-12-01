import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import '../Header/Header.css'
function Header() {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />

      <ul className="navbar-menu">
        <li
          className={menu === "home" ? "active" : ""}
          onClick={() => setMenu("home")}
        >
          <Link to="/">Home</Link>
        </li>

        <li
          className={menu === "menu" ? "active" : ""}
          onClick={() => setMenu("menu")}
        >
          <Link to="/menu">Menu</Link>
        </li>

        <li
          className={menu === "mobile-app" ? "active" : ""}
          onClick={() => setMenu("mobile-app")}
        >
          <Link to="/mobile-app">Mobile App</Link>
        </li>

        <li
          className={menu === "contact-us" ? "active" : ""}
          onClick={() => setMenu("contact-us")}
        >
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>

      <div className="navbar-right">
        <img src={assets.search_icon} alt="" />

        <div className="navbar-search-icon">
          <img src={assets.basket_icon} alt="" />
          <div className="dot"></div>
        </div>

        <button>Sign In</button>
      </div>
    </div>
  );
}

export default Header;
