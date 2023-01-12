import React from "react";
import { useProducts } from "../../../../context/ProductProvider";

const Cart = () => {
  const { state, dispatch } = useProducts();

  console.log("from cart", state);

  return (
    <div>
      <h1 className="text-center text-2xl font-semibold">Shopping Cart</h1>

      <div className=" w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Photo</th>
              <th>Name</th>
              <th>Quantity</th>

              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {state.cart.map((item) => {
              return (
                <tr key={item?._id}>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item?.image1}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item?.title.slice(0, 30)}</td>

                  <th>
                    <div class="form-control">
                      <label class="input-group">
                        <span onClick={() => dispatch({ type: "" })}>-</span>
                        <h1 className="px-2">{item?.quantity}</h1>
                        <span>+</span>
                      </label>
                    </div>
                  </th>
                  <td>{item.price * item.quantity}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
