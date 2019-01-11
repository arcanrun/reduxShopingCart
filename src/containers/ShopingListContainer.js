import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import ShopingItem from "../components/ShopingItem";

const mapDispatchToProps = dispatch => {
  return {
    onClick: (name, price, count, szie) => {
      dispatch(addToCart(name, price, count, szie));
    }
  };
};

const ShopingListContainer = connect(
  "",
  mapDispatchToProps
)(ShopingItem);

export default ShopingListContainer;
