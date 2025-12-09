import React, { useState } from "react";
import { assets } from "../../assets/assets";
import "../LoginPopup/Loginpopup.css"

export default function LoginPopup({ setShowLogin }) {
  const [currState, setCurrState] = useState("sign up");

  return (
    <div className="login-popup">
      <form className="login-popup-container">
        
        {/* Title + Close Button */}
        <div className="login-popup-title">
          <h2>{currState}</h2>

          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="close"
            className="close-icon"
          />
        </div>

        {/* Input Fields */}
        <div className="login-popup-body">
          {currState === "sign up" && (
            <input type="text" placeholder="Enter Name" />
          )}

          <input type="email" placeholder="Enter Email" />
          <input type="password" placeholder="Enter Password" />

          <button type="submit" className="btn-submit">
            {currState === "sign up" ? "Create Account" : "Login"}
          </button>
        </div>

        {/* Toggle Login / Signup */}
        <p className="toggle-text">
          {currState === "sign up" ? (
            <>
              Already have an account?{" "}
              <span onClick={() => setCurrState("login")}>Login</span>
            </>
          ) : (
            <>
              Don't have an account?{" "}
              <span onClick={() => setCurrState("sign up")}>Sign Up</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
}
