import React, { useEffect, useState } from "react";
import Product from "./Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);
  console.log(products);

  // fetch products data from db

  useEffect(() => {
    fetch("https://chibapcmartdemo.onrender.com/api/v1/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.result);
      });
  }, []);

  return (
    <div>
      <div className="grid  grid-cols-2 sm:grid md:grid-cols-3 gap-3">
        {products.map((product, index) => {
          return <Product product={product} key={index}></Product>;
        })}
      </div>
    </div>
  );
};

export default Products;
