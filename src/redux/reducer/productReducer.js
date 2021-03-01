import { GET_PRODUCT, GET_PRODUCT_SUCCESS } from "../actions/type";

const initState = {
  Productdata: [],
  loading: true,
};

export default function productReducer(state = initState, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return {
        ...state,
        loading: true,
      };

    case GET_PRODUCT_SUCCESS:
      return {
        ...state,
        Productdata: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
