import { createContext, useState } from "react";

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [productList, setProductsList] = useState([]);

  return (
    <ProductsContext.Provider value={{ productList, setProductsList }}>
      {children}
    </ProductsContext.Provider>
  );
};
