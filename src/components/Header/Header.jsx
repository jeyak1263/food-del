import React, { useState } from "react";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";
import "./Header.css";
import LoginPopup from "../LoginPopup/LoginPopup";

export default function Header() {
  const [menu, setMenu] = useState("home");
  const [showLogin, setShowLogin] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 🔍 Search states (MUST be here)
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    console.log("Searching for:", searchQuery);
    setShowSearch(false);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light px-3">
        <div className="container-fluid">

          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={assets.logo} alt="logo" className="logo-img" />
          </Link>

          {/* Hamburger */}
          <button
            className="navbar-toggler"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Menu */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
            <ul className="navbar-nav mx-auto">

              <li className="nav-item">
                <Link className="nav-link" to="/">HOME</Link>
              </li>

              <li className="nav-item">
                <a href="#explore-menu" className="nav-link">MENU</a>
              </li>

              <li className="nav-item">
                <a href="#app-download" className="nav-link">MOBILE APP</a>
              </li>

              <li className="nav-item">
                <a href="#footer" className="nav-link">CONTACT US</a>
              </li>
            </ul>

            {/* Right Side */}
            <div className="navbar-actions d-flex align-items-center gap-3">

              {/* 🔍 Search */}
              <div className="search-box">
                <img
                  src={assets.search_icon}
                  alt="search"
                  className="action-icon"
                  onClick={() => setShowSearch(!showSearch)}
                  style={{ cursor: "pointer" }}
                />

                {showSearch && (
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Search food..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") handleSearch();
                    }}
                  />
                )}
              </div>

              {/* Cart */}
              <Link to="/cart" className="position-relative">
                <img src={assets.basket_icon} alt="cart" className="action-icon" />
                <span className="cart-badge"></span>
              </Link>

              {/* Sign in */}
              <button
                onClick={() => setShowLogin(true)}
                className="btn btn-danger"
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
