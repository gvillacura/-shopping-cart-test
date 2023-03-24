import { useState, useEffect, useContext } from "react";
import { getListOfProducts } from "../helpers/getListOfProducts";
import { CartListContext } from "../context/CartListContext";

const useFetchCartProducts = () => {
  const [productsCartFiltered, setProductsCartFiltered] = useState([]);
  const [isCartLoading, setIsCartLoading] = useState(true);

  const { cartList } = useContext(CartListContext);

  // Consigue la lista de productos que están agregados al carrito de compras.
  useEffect(() => {
    const listOfProducts = getListOfProducts();
    let newProducts = [];
    listOfProducts.then((products) => {
      Object.keys(cartList).map((productId) => {
        const newProduct = products.find(
          (product) => +productId === +product._id
        );
        newProducts = [...newProducts, newProduct];
        return newProducts;
      });
      setProductsCartFiltered(newProducts);
      setIsCartLoading(false);
    });
  }, [cartList]);

  return { productsCartFiltered, isCartLoading };
};

export default useFetchCartProducts;
