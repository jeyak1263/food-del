import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      
      <div className="footer-content">

        {/* LEFT SIDE */}
        <div className="footer-left">
          <img src={assets.logo} alt="logo" className="footer-logo" />
          <p>
            Delicious meals delivered fresh to your door. Fast service, quality
            ingredients, and trusted taste you can enjoy anytime with confidence.
          </p>

          <div className="footer-socials">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-linkedin"></i>
          </div>
        </div>

        {/* MIDDLE SIDE */}
        <div className="footer-company">
          <h3>COMPANY</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className="footer-contact">
          <h3>GET IN TOUCH</h3>
          <ul>
            <li>+91 64565958</li>
            <li>contact@gmail.com</li>
          </ul>
        </div>

      </div>

      <hr />

      <p className="footer-copyright">
        © 2024 Tomato.com — All Rights Reserved
      </p>

    </div>
  );
};

export default Footer;
