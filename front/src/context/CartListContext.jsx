import { createContext, useReducer } from "react";

export const CartListContext = createContext();

const handleAdd = (state, key) => {
  if (Object.keys(state).includes(key.toString())) {
    return { ...state, [key]: state[key] + 1 };
  } else {
    return { ...state, [key]: 1 };
  }
};

const handleSubtract = (state, key) => {
  if (Object.keys(state).includes(key.toString())) {
    if (state[key] === 1) {
      const newState = { ...state };
      delete newState[key];
      return newState;
    } else {
      return { ...state, [key]: state[key] - 1 };
    }
  }
  return state;
};

const handleRemoveAll = (state, key) => {
  const stateRemove = { ...state };
  delete stateRemove[key];
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
