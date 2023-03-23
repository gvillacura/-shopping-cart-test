import React, { useContext } from "react";
import "../styles/cart.css";
import { CartListContext } from "../context/CartListContext";
import useFetchCartProducts from "../hooks/useFetchCartProducts";
import CartResume from "./CartResume";

const Cart = () => {
  const { cartList, setCartList } = useContext(CartListContext);
  const { productsCartFiltered } = useFetchCartProducts();

  return (
    <div className="cart">
      <div className="cart__products">
        {productsCartFiltered.map((product) => (
          <div className="cart__product" key={product._id}>
            <img src={`http://localhost:5000/${product.image}`} alt="product" />
            <div>
              <h3>{product.brand}</h3>
              <h3>{product.name}</h3>
              <h3>{product.price}</h3>
            </div>
            <div className="amount">
              <div className="amount__modify">
                <button
                  className="amount__button amount__button--decrease"
                  onClick={() => {
                    setCartList({
                      type: "delete-one",
                      element: product._id,
                    });
                  }}
                >
                  -1
                </button>
                <p>{cartList[product._id]}</p>
                <button
                  className="amount__button amount__button--increase"
                  onClick={() => {
                    setCartList({
                      type: "add",
                      element: product._id,
                    });
                  }}
                >
                  +1
                </button>
              </div>
              <button
                className="amount__delete"
                onClick={() => {
                  setCartList({
                    type: "delete-all",
                    element: product._id,
                  });
                }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <CartResume products={productsCartFiltered} />
    </div>
  );
};

export default Cart;
