import React from "react";
import "./Description.css";
import { assets } from "../../assets/assets";

const Description = () => {
  return (
    <div className="description">
      <div className="description-text-content">
        <h2>Key features to coffee include</h2>
        <p className="description-text">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
        <div className="description-list">
          <ul>
            <li><img src={assets.checkmark} alt="Check" className="check-icon" /> Feature 1</li>
            <li><img src={assets.checkmark} alt="Check" className="check-icon" /> Feature 2</li>
            <li><img src={assets.checkmark} alt="Check" className="check-icon" /> Feature 3</li>
            <li><img src={assets.checkmark} alt="Check" className="check-icon" /> Feature 4</li>
          </ul>
        </div>
        <button className="read-more">Read more</button>
      </div>
      <div className="description-images">
        <img
          src={assets.coffeefeature1}
          alt="Feature 1"
          className="description-image"
        />
        <img
          src={assets.coffeefeature2}
          alt="Feature 2"
          className="description-image"
        />
      </div>
    </div>
  );
};

export default Description;
