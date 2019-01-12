import React from "react";
import { connect } from "react-redux";
import { addToCart } from "../actions";
import BoughtList from "../components/BoughtList";

const mapStateToProps = state => {
  return {
    totalSum: state.totalSum,
    items: state.itmes
  };
};

const BoughtListContainer = connect(mapStateToProps)(BoughtList);

export default BoughtListContainer;
