import { useState, useEffect } from "react";
import { getListOfProducts } from "../helpers/getListOfProducts";

const useFetchProducts = () => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Consigue la lista de todos los productos.
  useEffect(() => {
    const listOfProducts = getListOfProducts();
    listOfProducts.then((resp) => {
      setProducts(resp);
      setIsLoading(false);
    });
  }, []);

  return { products, isLoading };
};

export default useFetchProducts;
