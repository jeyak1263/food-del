import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./Header.css";
import LoginPopup from "../LoginPopup/LoginPopup";

export default function Header() {
  const [menu, setMenu] = useState("home");
  const [showLogin, setShowLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light px-3">
        <div className="container-fluid">

          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={assets.logo} alt="logo" className="logo-img" />
          </Link>

          {/* Hamburger Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link
                  className={`nav-link ${menu === "home" ? "active" : ""}`}
                  to="/"
                  onClick={() => {
                    setMenu("home");
                    setIsMenuOpen(false);
                  }}
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <a href="#explore-menu" className="nav-link"
                  onClick={() => {
                    setMenu("menu");
                    setIsMenuOpen(false);
                  }}>
                  Menu
                </a>
              </li>

              <li className="nav-item">
                <a href="#app-download" className="nav-link"
                  onClick={() => {
                    setMenu("mobile-app");
                    setIsMenuOpen(false);
                  }}>
                  Mobile App
                </a>
              </li>

              <li className="nav-item">
                <a href="#footer" className="nav-link"
                  onClick={() => {
                    setMenu("contact-us");
                    setIsMenuOpen(false);
                  }}>
                  Contact Us
                </a>
              </li>
            </ul>

            {/* Right Side Actions */}
            <div className="navbar-actions d-flex align-items-center gap-3">
              <img src={assets.search_icon} alt="search" className="action-icon" />

              <Link to="/cart" className="position-relative">
                <img src={assets.basket_icon} alt="cart" className="action-icon" />
                <span className="cart-badge"></span>
              </Link>

              <button
                onClick={() => setShowLogin(true)}
                className="btn btn-danger btn-signin"
              >
                Sign In
              </button>
            </div>
          </div>
        </div>
      </nav>

      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
    </>
  );
}
