import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt="" />
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating} alt="" />
        </div>
        <p className="food-item-desc">{description}</p>
        <div className="food-item-price-cart">
          <p className="food-item-price">${price}</p>
          {!cartItems[id] ? 
            <img
              className="add-to-cart"
              onClick={() => addToCart(id)}
              src={assets.shopping_cart}
              alt=""
            />
           : 
            <div className="food-item-counter">
              <div className="food-item-counter-controls">
                <img
                  onClick={() => removeFromCart(id)}
                  src={assets.remove}
                  alt=""
                />
                <p>{cartItems[id]}</p>
                <img onClick={() => addToCart(id)} src={assets.add} alt="" />
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
