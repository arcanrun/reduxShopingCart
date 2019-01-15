export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILURE = "GET_PRODUCTS_FAILURE";

export const getProducts = () => {
  return dispatch => {
    dispatch({
      type: GET_PRODUCTS_REQUEST,
      payload: { isFetching: true }
    });
    fetch("http://localhost:3000/products.json")
      .then(res => res.json())
      .then(res =>
        setTimeout(
          () =>
            dispatch({
              type: GET_PRODUCTS_SUCCESS,
              payload: { items: res, isFetching: false }
            }),
          1000
        )
      )
      .catch(err =>
        dispatch({
          type: GET_PRODUCTS_FAILURE,
          payload: {
            isFetching: false,
            message: new Error(err),
            error: true
          }
        })
      );
  };
};
