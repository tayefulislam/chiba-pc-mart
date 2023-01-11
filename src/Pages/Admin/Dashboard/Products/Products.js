import React from "react";
import { useProducts } from "../../../../context/ProductProvider";
import Product from "./Product/Product";

const Products = () => {
  const { products } = useProducts();

  return (
    <div>
      <div className="grid  grid-cols-2 sm:grid md:grid-cols-3 gap-3 px-2 mt-3">
        {products?.map((product, index) => {
          return <Product product={product} key={index}></Product>;
        })}
      </div>
    </div>
  );
};

export default Products;
