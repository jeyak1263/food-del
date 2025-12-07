import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        
        <Link className="navbar-brand" to="/">
          <img src={assets.logo} alt="logo" className="logo-img" />
        </Link>

        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link
                className={`nav-link ${menu === "home" ? "active" : ""}`}
                to="/"
                onClick={() => {setMenu("home"); setIsMenuOpen(false);}}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${menu === "menu" ? "active" : ""}`}
                to="/menu"
                onClick={() => {setMenu("menu"); setIsMenuOpen(false);}}
              >
                Menu
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${menu === "mobile-app" ? "active" : ""}`}
                to="/mobile-app"
                onClick={() => {setMenu("mobile-app"); setIsMenuOpen(false);}}
              >
                Mobile App
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={`nav-link ${menu === "contact-us" ? "active" : ""}`}
                to="/contact"
                onClick={() => {setMenu("contact-us"); setIsMenuOpen(false);}}
              >
                Contact Us
              </Link>
            </li>
          </ul>

          <div className="navbar-actions d-flex align-items-center gap-3">
            <img src={assets.search_icon} alt="search" className="action-icon" />
            <Link to="/cart" className="position-relative">
              <img src={assets.basket_icon} alt="cart" className="action-icon" />
              <span className="cart-badge"></span>
            </Link>
            <button className="btn btn-danger btn-signin">Sign In</button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;
