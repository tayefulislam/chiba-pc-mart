import { createContext, useContext, useEffect, useState } from "react";
const PRODUCT_CONTEXT = createContext();
const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://chibapcmartdemo.onrender.com/api/v1/products")
      .then((res) => res.json())
      .then((data) => setProducts(data?.result));
  }, []);

  console.log(products);

  const value = {
    products,
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
