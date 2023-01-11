export const initialState = {
  loading: false,
  products: [],
  error: false,
};

export const ProductReducer = (state, action) => {
  console.log(action?.payload);
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
        products: [...state.products, action.payload],
      };

    case "FETCHING_ERROR":
      return {
        ...state,
        loading: false,
        error: true,
      };

    default:
      return state;
  }
};
