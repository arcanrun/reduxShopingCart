import React from "react";
import PropTypes from "prop-types";
import "./styles/ShopingList.css";

import ShopingItem from "./ShopingItem";

const ShopingList = ({ shopingList, onClick, isFetching, error }) => (
  <ul className="shoping-list">
    <div className="shoping-list__title">
      <span>id</span>
      <span>name</span>
      <span>price</span>
      <span>count</span>
      <span>size</span>
    </div>
    {isFetching ? (
      <h1>Loading...</h1>
    ) : !error ? (
      <h1>some erorr while fetching data</h1>
    ) : (
      shopingList.map(el => (
        <ShopingItem onClick={onClick} key={el.id} {...el} />
      ))
    )}
  </ul>
);

ShopingList.propTypes = {
  shopingList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default ShopingList;
