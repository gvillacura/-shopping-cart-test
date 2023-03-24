import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Details from "./components/Details";
import Products from "./components/Products";
import MiniCart from "./components/MiniCart";
import Cart from "./components/Cart";
import { CartListContext } from "./context/CartListContext";

const Main = () => {
  const { setCartList } = useContext(CartListContext);

  //Consigue los datos del carrito de compras, almacenados en el localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (window.localStorage.getItem("cartProducts")) {
        const dataLocalStorage = window.localStorage.getItem("cartProducts");
        setCartList({
          type: "setInitialProducts",
          element: JSON.parse(dataLocalStorage),
        });
      }
    }
  }, [setCartList]);
  return (
    <Router>
      <MiniCart />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/product/:id" element={<Details />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
};

export default Main;
