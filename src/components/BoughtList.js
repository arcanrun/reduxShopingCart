import React from "react";
import PropTypes from "prop-types";
import BoughtItem from "./BoughtItem";
import "./styles/BoughtList.css";

const BoughtList = ({ totalSum, items, onClickClear, onClickDeleteItem }) => (
  <div className="bought-list">
    <div className="bought-list__title">
      <button onClick={() => onClickClear()}>clear all</button>
      Total Sum:<span>{totalSum}$</span>
    </div>

    <div className="bought_list__body">
      {items.map(el => (
        <BoughtItem key={el.id} {...el} onClick={onClickDeleteItem} />
      ))}
    </div>
  </div>
);

BoughtList.propTypes = {
  totalSum: PropTypes.number.isRequired
};
export default BoughtList;
