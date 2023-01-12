import React from "react";

import { useProducts } from "../../../../../context/ProductProvider";
import { actionTypes } from "../../../../../State/ProductState/actionTypes";

const Product = ({ product }) => {
  // console.log(product);
  const { state, dispatch } = useProducts();
  const { image1, title, _id, productId, discountPrice } = product;

  const cartProduct = {
    _id,
    productId,
    title,
    image1,
    quantity: 1,
    price: discountPrice,
  };

  // console.log("From Product", dispatch);

  // console.log("Product Card", state);

  return (
    <div className="card max-w-[300px]">
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

        <button
          onClick={() =>
            dispatch({ type: actionTypes.ADD_TO_CART, payload: cartProduct })
          }
          className="btn btn-primary"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
