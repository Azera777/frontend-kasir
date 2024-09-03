import React from 'react';
import './Header.css';
import { assets } from '../../assets/assets';

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <p>When even the taste surprises you.</p>
        <p className="subtext">Experience the finest flavors and freshest ingredients on our menu.</p>
        <button>View Menu</button>
      </div>
      <img src={assets.coffeebg} alt="Coffee Bg" className="header-image" />
    </div>
  );
};

export default Header;
