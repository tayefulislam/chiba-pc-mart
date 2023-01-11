import React from "react";

const Product = ({ product }) => {
  console.log(product);

  // const { product,} = product;
  return (
    <div className="card max-w-[300px] shadow-xl">
      <div className="mx-auto">
        <img src={product.image1} alt={product.title} />
      </div>
      <div className="card-body p-3">
        <h2 className="card-title text-base ">{product.title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">
            Price :
            <h1 className="font-semibold">
              {" "}
              {product.discountPrice} <s>{product.regularPrice}</s>
            </h1>
          </div>
        </div>

        <button className="btn btn-primary">Add To Cart</button>
      </div>
    </div>
  );
};

export default Product;
