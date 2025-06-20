import React from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="logo" src="craveaura_logo.png" alt="" />
      <p className="admin-title">Admin Panel</p>
      <img className="profile" src={assets.profile_image} alt="" />
    </div>
  );
};

export default Navbar;
