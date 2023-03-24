import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { HiStar } from "react-icons/hi2";
import { useParams } from "react-router-dom";
import { CartListContext } from "../context/CartListContext";

import "../styles/details.css";
import useFetchProductsFiltered from "../hooks/useFetchProductsFiltered";

const Details = () => {
  const { id } = useParams();
  const { productsFiltered } = useFetchProductsFiltered(id);
  const { setCartList } = useContext(CartListContext);

  return (
    <div className="details">
      <img src={`http://localhost:5000/${productsFiltered.image}`} alt="" />
      <div>
        <h3 className="details__brand">{productsFiltered.brand}</h3>
        <h3 className="details__name">{productsFiltered.name}</h3>
        <p className="details__description">{productsFiltered.description}</p>
        <h3 className="details__price">{productsFiltered.price}</h3>
        <div className="detailes__options">
          <div className="details__rating">
            <IconContext.Provider value={{ className: "details__icon" }}>
              <HiStar />
            </IconContext.Provider>
            <p className="details__text">{productsFiltered.rating}</p>
          </div>
          <p className="details__numReviews">
            Views: {productsFiltered.numReviews}
          </p>
        </div>
        <button
          disabled={productsFiltered.countInStock === 0 ? true : false}
          onClick={() => {
            setCartList({
              type: "add",
              element: id,
            });
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Details;
