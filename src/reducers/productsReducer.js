import {
  GET_PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAILURE
} from "../actions/productsAction";

const initialState = {
  isFetching: false,
  items: [],
  error: ""
};

export function products(state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS_REQUEST:
      return { ...state, isFetching: action.payload.isFetching };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isFetching: action.payload.isFetching,
        items: action.payload.items
      };
    case GET_PRODUCTS_FAILURE:
      return {
        ...state,
        error: action.payload.error,
        message: action.payload.message,
        isFetching: action.payload.isFetching
      };

    default:
      return state;
  }
}
