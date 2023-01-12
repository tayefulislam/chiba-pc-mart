import React from "react";
import { useProducts } from "../../../../context/ProductProvider";
import Product from "./Product/Product";

const Products = () => {
  const {
    state: { products, loading, error },
  } = useProducts();

  // console.log("Products", products);

  if (loading) {
    return (
      <div>
        <p>Loading</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-3 px-2 mt-3">
      {products?.map((product, index) => {
        return <Product product={product} key={index}></Product>;
      })}
    </div>
  );
};

export default Products;
