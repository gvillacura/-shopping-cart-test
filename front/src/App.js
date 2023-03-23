import React from "react";
import Details from "./components/Details";
import Products from "./components/Products";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MiniCart from "./components/MiniCart";
import Cart from "./components/Cart";
import { ProductsProvider } from "./context/ProductsContext";
import { CartListProvider } from "./context/CartListContext";

const App = () => {
  return (
    <CartListProvider>
      <ProductsProvider>
        <Router>
          <MiniCart />
          <Routes>
            <Route path="/" element={<Products />} />
            <Route path="/product/:id" element={<Details />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ProductsProvider>
    </CartListProvider>
  );
};

export default App;
