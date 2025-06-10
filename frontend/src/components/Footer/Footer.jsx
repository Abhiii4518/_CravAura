import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img className="footer-logo" src="/craveaura_logo.png" alt="" />
          <p>
            CravAura is your go-to destination for delicious meals delivered
            fresh and fast. We bring the best local flavors right to your
            doorstep with just a few clicks.
            <br />
            <br />
            “Satisfy Your Cravings, Feel the Aura.”
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get In Touch</h2>
          <ul>
            <li>9876543215</li>
            <li>contact@cravaura.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2025 CravAura.com - All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
