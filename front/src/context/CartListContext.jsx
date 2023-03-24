import { createContext, useReducer } from "react";

export const CartListContext = createContext();

// Agregar y actualizar el estado del carrito de compras en localStorage.
const addInLocalStorage = (state) => {
  localStorage.setItem("cartProducts", JSON.stringify(state));
};

// Para agregar un nuevo item.
const handleAdd = (state, key) => {
  if (Object.keys(state).includes(key.toString())) {
    addInLocalStorage({ ...state, [key]: state[key] + 1 });
    return { ...state, [key]: state[key] + 1 };
  } else {
    addInLocalStorage({ ...state, [key]: 1 });
    return { ...state, [key]: 1 };
  }
};

// Para remover un solo item de una lista de los mismos productos.
const handleSubtract = (state, key) => {
  if (Object.keys(state).includes(key.toString())) {
    if (state[key] === 1) {
      const newState = { ...state };
      delete newState[key];
      addInLocalStorage(newState);
      return newState;
    } else {
      addInLocalStorage({ ...state, [key]: state[key] - 1 });
      return { ...state, [key]: state[key] - 1 };
    }
  }
  return state;
};

// Para remover todos los items de un producto.
const handleRemoveAll = (state, key) => {
  const stateRemove = { ...state };
  delete stateRemove[key];
  addInLocalStorage(stateRemove);
  return stateRemove;
};

export const CartListProvider = ({ children }) => {
  const initialState = {};

  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return handleAdd(state, action.element);
      case "delete-one":
        return handleSubtract(state, action.element);
      case "delete-all":
        return handleRemoveAll(state, action.element);
      case "setInitialProducts":
        return { ...state, ...action.element };
      default:
        return state;
    }
  };
  const [cartList, setCartList] = useReducer(reducer, initialState);

  return (
    <CartListContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CartListContext.Provider>
  );
};
