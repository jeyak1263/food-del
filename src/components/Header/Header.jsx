import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

function Header() {
  const [menu, setMenu] = useState("home");

  return (
    <nav className="navbar navbar-expand-lg bg-light px-3">
      <div className="container-fluid d-flex justify-content-between align-items-center">

        <div className="d-flex align-items-center flex-grow-1">
          <Link className="navbar-brand" to="/">
            <img src={assets.logo} alt="logo" height="40" />
          </Link>
        </div>

       
        <div className="collapse navbar-collapse flex-grow-1 justify-content-center" id="mainNavbar">
          <ul className="navbar-nav mb-2 mb-lg-0 gap-4">

            <li className="nav-item">
              <Link
                className={`nav-link ${menu === "home" ? "active" : ""}`}
                to="/"
                onClick={() => setMenu("home")}
              >
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${menu === "menu" ? "active" : ""}`}
                to="/menu"
                onClick={() => setMenu("menu")}
              >
                Menu
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${menu === "mobile-app" ? "active" : ""}`}
                to="/mobile-app"
                onClick={() => setMenu("mobile-app")}
              >
                Mobile App
              </Link>
            </li>

            <li className="nav-item">
              <Link
                className={`nav-link ${menu === "contact-us" ? "active" : ""}`}
                to="/contact"
                onClick={() => setMenu("contact-us")}
              >
                Contact Us
              </Link>
            </li>

          </ul>
        </div>

        
        <div className="d-flex align-items-center gap-3 flex-grow-1 justify-content-end">

          <img src={assets.search_icon} alt="search" height="22" />

          <div className="position-relative">
            <img src={assets.basket_icon} alt="cart" height="25" />
            <span className="position-absolute top-0 start-100 translate-middle p-1 bg-danger border border-light rounded-circle"></span>
          </div>

          <button className="btn btn-danger">Sign In</button>
        </div>

      </div>
    </nav>
  );
}

export default Header;
