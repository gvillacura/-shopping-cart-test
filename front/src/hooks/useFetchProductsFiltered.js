import { useState, useEffect } from "react";
import { getListOfProducts } from "../helpers/getListOfProducts";

const useFetchProductsFiltered = (id) => {
  const [productsFiltered, setProductsFiltered] = useState([]);

  // Consigue la información de un producto según id.
  useEffect(() => {
    const listOfProducts = getListOfProducts();
    listOfProducts.then((products) => {
      setProductsFiltered(products.find((product) => +product._id === +id));
    });
  }, [id]);

  return { productsFiltered };
};

export default useFetchProductsFiltered;
