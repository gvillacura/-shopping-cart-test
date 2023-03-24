import { useState, useContext, useEffect } from "react";
import { CartListContext } from "../context/CartListContext";

// Retorna la cantidad total de productos agregados
const GetProductsAmount = () => {
  const [productsAmount, setProductsAmount] = useState(0);
  const { cartList } = useContext(CartListContext);

  useEffect(() => {
    const amount = Object.values(cartList);
    const totalAmount = amount.reduce((a, b) => a + b, 0);
    setProductsAmount(totalAmount);
  }, [cartList]);

  return { productsAmount };
};

export default GetProductsAmount;
