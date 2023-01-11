import React from "react";

const Product = ({ product }) => {
  console.log(product);

  // const { product,} = product;
  return (
    <div className="card sm:w-[300px] md:w-full lg:w-full bg-base-100 shadow-xl">
      <figure>
        <img
          className="w-full"
          src="https://placeimg.com/400/225/arch"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-base">
          {product.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
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

        <div className="card-actions">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
