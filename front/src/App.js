import React from "react";
import { CartListProvider } from "./context/CartListContext";
import Main from "./Main";

const App = () => {
  return (
    <CartListProvider>
      <Main />
    </CartListProvider>
  );
};

export default App;
