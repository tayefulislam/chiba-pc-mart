import { actionTypes } from "./actionTypes";

export const initialState = {
  loading: false,
  products: [],
  error: false,
  cart: [],
};

export const ProductReducer = (state, action) => {
  // console.log(action?.payload);
  // console.log(state);

  const { cart } = state;
  console.log();

  const itemExists = cart?.findIndex(
    (item) => item?.productId === action?.payload?.productId
  );

  if (itemExists) {
    console.log(itemExists, "found");
  }

  switch (action.type) {
    case "FETCHING_START":
      return {
        ...state,
        loading: true,
        error: false,
      };

    case "FETCHING_SUCCESS":
      return {
        ...state,
        loading: false,
        products: action.payload,
      };

    case "FETCHING_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };

    case "ADD_TO_CART":
      if (itemExists) {
        return {
          ...state,
          quantity: cart[itemExists].quantity + 1,
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    // case actionTypes

    default:
      return state;
  }
};
