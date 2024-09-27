import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const Navbar = ({ setShowLogin }) => {
  const [menu, setMenu] = useState("home");
  const navigate = useNavigate();
  const { getTotalCartAmount, token, setToken } = useContext(StoreContext);
  const logout = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/")
  }

  return (
    <div className="navbar">
      <div className="logo" onClick={() => navigate("")}>
        <img src={assets.logo} alt="Logo" className="logo-img" />
      </div>
      <div className="navbar-center">
        <div className="menu">
          <a
            className={menu === "home" ? "active" : ""}
            onClick={() => setMenu("home")}
          >
            Home
          </a>
          <a
            className={menu === "menu" ? "active" : ""}
            onClick={() => setMenu("menu")}
          >
            Menu
          </a>
          <a
            className={menu === "about-us" ? "active" : ""}
            onClick={() => setMenu("about-us")}
          >
            About Us
          </a>
          <a
            className={menu === "contact" ? "active" : ""}
            onClick={() => setMenu("contact")}
          >
            Contact
          </a>
        </div>
      </div>
      <div className="navbar-right">
        <div className="navbar-shopping-icon" onClick={() => navigate("/cart")}>
          <img src={assets.shopping_cart} alt="Shopping Cart" />
          <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
        </div>
        {!token ? (
          <button onClick={() => setShowLogin(true)}>Sign in</button>
        ) : (
          <div className="navbar-profile">
            <img src={assets.profile} alt="" />
            <ul className="nav-profile-dropdown">
              <li>
                <img src={assets.shopping_cart} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li onClick={logout}>
                <img src={assets.logout} alt="" />
                <p>Logout</p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
