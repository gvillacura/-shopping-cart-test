import React, { useContext } from "react";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";
import { HiStar } from "react-icons/hi2";
import { CartListContext } from "../context/CartListContext";
import useFetchProducts from "../hooks/useFetchProducts";
import "../styles/products.css";

const Products = () => {
  const { products } = useFetchProducts();
  const { setCartList } = useContext(CartListContext);

  return (
    <div className="productsContainer">
      {products.map((product) => {
        return (
          <div className="product" key={product._id}>
            <Link to={`/product/${product._id}`}>
              <img
                className="product__image"
                src={`http://localhost:5000/${product.image}`}
                alt={`${product.name}`}
              />
            </Link>
            <h3 className="product__brand">{product.brand}</h3>
            <h3 className="product__name"> {product.name}</h3>
            <h3 className="product__price">{product.price}</h3>
            <div className="options">
              <div className="options__info">
                <div className="rating">
                  <IconContext.Provider value={{ className: "rating__icon" }}>
                    <HiStar />
                  </IconContext.Provider>
                  <p className="rating__text">{product.rating}</p>
                </div>
                <p className="options__numReviews">
                  Views: {product.numReviews}
                </p>
              </div>
              <button
                disabled={product.countInStock === 0 ? true : false}
                onClick={() => {
                  setCartList({
                    type: "add",
                    element: product._id,
                  });
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
