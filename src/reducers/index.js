import { combineReducers } from "redux";
import { shopingCart } from "./shopingCartReducrs";
import { products } from "./productsReducer";

export const rootReducer = combineReducers({
  shopingCart,
  products
});
