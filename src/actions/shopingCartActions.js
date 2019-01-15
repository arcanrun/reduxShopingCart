export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const CLEAR_ALL = "CLEAR_ALl";

let nextId = 0;
export const addToCart = (name, price, count, size) => {
  return {
    type: ADD_TO_CART,
    payload: {
      id: nextId++,
      name,
      price,
      count,
      size
    }
  };
};

export const removeItem = id => {
  return {
    type: REMOVE_ITEM,
    payload: { id }
  };
};

export const clearAll = () => {
  return {
    type: CLEAR_ALL
  };
};
