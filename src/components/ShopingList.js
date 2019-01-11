import React from "react";
import PropTypes from "prop-types";
import ShopingListContainer from "../containers/ShopingListContainer";
import "./ShopingList.css";

const ShopingList = ({ shopingList, onClick }) => (
  <ul className="shoping-list">
    <div className="shoping-list__title">
      <span>id</span>
      <span>name</span>
      <span>price</span>
      <span>count</span>
      <span>size</span>
    </div>
    {shopingList.map(el => (
      <ShopingListContainer key={el.id} {...el} />
    ))}
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
