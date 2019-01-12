import React from "react";
import PropTypes from "prop-types";
import "./styles/BoughtList.css";

const BoughtItem = ({ name, price, count, size, onClick }) => (
  <div className="bought-list__item">
    <div className="bought-list__item_close_btn">[X]</div>
    <p>{name}</p>
    <p>for one: {price}$</p>
    <p>count:{count}</p>
    <p>size:{size}</p>
  </div>
);
export default BoughtItem;