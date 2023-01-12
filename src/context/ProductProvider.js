import { createContext, useContext, useEffect, useReducer } from "react";
import {
  initialState,
  ProductReducer,
} from "../State/ProductState/ProductReducer";

const PRODUCT_CONTEXT = createContext();

const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initialState);

  useEffect(() => {
    fetch("https://chibapcmartdemo.onrender.com/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: "FETCHING_SUCCESS", payload: data.result });
      });
  }, []);

  //   console.log(state);

  const value = {
    state,
    dispatch,
  };

  return (
    <PRODUCT_CONTEXT.Provider value={value}>
      {children}
    </PRODUCT_CONTEXT.Provider>
  );
};

export const useProducts = () => {
  const context = useContext(PRODUCT_CONTEXT);
  return context;
};

export default ProductProvider;
