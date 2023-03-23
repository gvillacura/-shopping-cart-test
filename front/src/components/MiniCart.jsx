import React from "react";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { HiShoppingCart } from "react-icons/hi2";
import "../styles/minicart.css";
import GetProductsAmount from "../helpers/getProductsAmount";

const MiniCart = () => {
  const { productsAmount } = GetProductsAmount();

  return (
    <div className="minicart">
      <Link to="/">
        <h3 className="minicart__products">Products</h3>
      </Link>
      <div className="minicart__resume">
        <div className="minicart__amount">
          <p className="minicart__text"> {productsAmount}</p>
        </div>
        <IconContext.Provider value={{ className: "minicart__icon" }}>
          <Link to="/cart">
            <HiShoppingCart />
          </Link>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default MiniCart;
