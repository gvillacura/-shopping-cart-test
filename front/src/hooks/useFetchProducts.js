import { useState, useEffect, useContext } from "react";
import { ProductsContext } from "../context/ProductsContext";
import { getListOfProducts } from "../helpers/getListOfProducts";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { setProductsList } = useContext(ProductsContext);

  useEffect(() => {
    const listOfProducts = getListOfProducts();
    listOfProducts.then((resp) => {
      setProducts(resp);
      setIsLoading(false);
    });
  }, [setProductsList]);

  return { products, isLoading };
};

export default useFetchProducts;
