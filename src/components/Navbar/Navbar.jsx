import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Navbar.css';
import { assets } from '../../assets/assets';

const Navbar = ({setShowLogin}) => {
  const [menu, setMenu] = useState('home');
  const navigate = useNavigate();

  return (
    <div className='navbar'>
      <div className='logo' onClick={() => navigate("")}>
        <img src={assets.logo} alt='Logo' className='logo-img' />
      </div>
      <div className="navbar-center">
        <div className="menu">
          <a
            className={menu === "home" ? "active" : ""}
            onClick={() => setMenu('home')}
          >
            Home
          </a>
          <a
            className={menu === "menu" ? "active" : ""}
            onClick={() => setMenu('menu')}
          >
            Menu
          </a>
          <a
            className={menu === "about-us" ? "active" : ""}
            onClick={() => setMenu('about-us')}
          >
            About Us
          </a>
          <a
            className={menu === "contact" ? "active" : ""}
            onClick={() => setMenu('contact')}
          >
            Contact
          </a>
        </div>
      </div>
      <div className="navbar-right">
      <div
        className="navbar-shopping-icon"
        onClick={() => navigate("/cart")}
      >
        <img src={assets.shopping_cart} alt="Shopping Cart" />
        <div className="dot"></div>
      </div>
      <button onClick={() => setShowLogin(true)}>Sign in</button>
    </div>
    </div>
  );
};

export default Navbar;
