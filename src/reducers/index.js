import { ADD_TO_CART, REMOVE_ITEM, CLEAR_ALL } from "../actions/index";

export const shopingCart = (state = { itmes: [], totalSum: 0 }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      let arr = [...state.itmes, action.payload];
      let totalSum = 0;
      arr.forEach(el => {
        totalSum += parseFloat(el.price * el.count);
      });

      return { itmes: arr, totalSum };

    case CLEAR_ALL:
      return { itmes: [], totalSum: 0 };

    case REMOVE_ITEM:
      let newTotalSum = 0;
      let newItems = [];
      state.itmes.forEach(el => {
        if (el.id !== action.payload.id) {
          newTotalSum += parseFloat(el.price * el.count);
          newItems.push(el);
        }
      });

      return { ...state, itmes: newItems, totalSum: newTotalSum };
    default:
      return state;
  }
};
