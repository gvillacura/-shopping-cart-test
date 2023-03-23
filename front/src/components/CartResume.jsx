import React, { useState, useContext, useEffect } from "react";
import { CartListContext } from "../context/CartListContext";
import GetProductsAmount from "../helpers/getProductsAmount";
import useFetchCartProducts from "../hooks/useFetchCartProducts";

const CartResume = () => {
  const { productsCartFiltered, isCartLoading } = useFetchCartProducts();
  const { productsAmount } = GetProductsAmount();

  const [totalPrice, setTotalPrice] = useState(0);
  const { cartList } = useContext(CartListContext);

  useEffect(() => {
    if (!isCartLoading) {
      let totalValue = 0;
      productsCartFiltered.forEach((product) => {
        const quantity = cartList[product._id] || 0;
        const price = product.price;
        const subtotal = price * quantity;
        totalValue = totalValue + subtotal;
      });
      setTotalPrice(totalValue);
    }
  }, [cartList, isCartLoading, productsCartFiltered]);

  return (
    <div className="resume">
      <h3 className="resume__title">Summary</h3>
      <div className="resume__products">
        <h3>Products:</h3>
        <p>{productsAmount}</p>
      </div>
      <div className="resume__products">
        <h3>Total:</h3>
        <p>{totalPrice}</p>
      </div>
    </div>
  );
};

export default CartResume;
