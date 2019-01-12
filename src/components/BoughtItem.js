import React from "react";
import PropTypes from "prop-types";
import "./styles/BoughtList.css";

const BoughtItem = ({ id, name, price, count, size, onClick }) => (
  <div className="bought-list__item">
    <div className="bought-list__item_close_btn" onClick={() => onClick(id)}>
      [X]
    </div>
    <p>{name}</p>
    <p>for one: {price}$</p>
    <p>count:{count}</p>
    <p>size:{size}</p>
  </div>
);

BoughtItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  size: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
export default BoughtItem;
