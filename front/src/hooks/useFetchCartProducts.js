import { useState, useEffect, useContext } from "react";
import { getListOfProducts } from "../helpers/getListOfProducts";
import { CartListContext } from "../context/CartListContext";
import { ProductsContext } from "../context/ProductsContext";

const useFetchCartProducts = () => {
  const [productsCartFiltered, setProductsCartFiltered] = useState([]);
  const [isCartLoading, setIsCartLoading] = useState(true);

  const { cartList } = useContext(CartListContext);
  const { setProductsList } = useContext(ProductsContext);

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
      setProductsList(newProducts);
      setIsCartLoading(false);
    });
  }, [cartList, setProductsList]);

  return { productsCartFiltered, isCartLoading };
};

export default useFetchCartProducts;
