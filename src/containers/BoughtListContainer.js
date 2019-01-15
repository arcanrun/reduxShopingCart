import React from "react";
import { connect } from "react-redux";
import { clearAll, removeItem } from "../actions";
import BoughtList from "../components/BoughtList";

const mapStateToProps = state => {
  return {
    totalSum: state.shopingCart.totalSum,
    items: state.shopingCart.itmes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClickClear: () => dispatch(clearAll()),
    onClickDeleteItem: id => dispatch(removeItem(id))
  };
};

const BoughtListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoughtList);

export default BoughtListContainer;
