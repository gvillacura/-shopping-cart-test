import { useState, useEffect } from "react";
import { getListOfProducts } from "../helpers/getListOfProducts";

const useFetchProductsFiltered = (id) => {
  const [productsFiltered, setProductsFiltered] = useState([]);

  useEffect(() => {
    const listOfProducts = getListOfProducts();
    listOfProducts.then((products) => {
      setProductsFiltered(products.find((product) => +product._id === +id));
    });
  }, [id]);

  return { productsFiltered };
};

export default useFetchProductsFiltered;
