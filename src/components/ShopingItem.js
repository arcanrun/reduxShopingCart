import React from "react";
import PropTypes from "prop-types";

class ShopingItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = { count: 1, size: "tall" };
    this.handleCount = this.handleCount.bind(this);
    this.handleSize = this.handleSize.bind(this);
  }

  handleCount(e) {
    this.setState(
      {
        count: parseInt(e.target.value)
      },
      () => console.log(this.state.count)
    );
  }

  handleSize(e) {
    this.setState(
      {
        size: e.target.value
      },
      () => console.log(this.state.size)
    );
  }
  render() {
    const { id, name, price, count, size, onClick } = this.props;
    const realCount = this.state.count;
    const realSize = this.state.size;

    return (
      <li>
        <span>{id}</span>
        <span>{name}</span>
        <span>{price} $</span>
        <span>
          <select value={realCount} onChange={this.handleCount}>
            {count.map((el, index) => {
              return <option key={index}>{el}</option>;
            })}
          </select>
        </span>
        <span>
          <select value={realSize} onChange={this.handleSize}>
            {size.map((el, index) => {
              return (
                <option key={index} value={el}>
                  {el}
                </option>
              );
            })}
          </select>
        </span>
        <button onClick={() => onClick(name, price, realCount, realSize)}>
          buy
        </button>
      </li>
    );
  }
}

ShopingItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  count: PropTypes.arrayOf(PropTypes.number).isRequired,
  size: PropTypes.arrayOf(PropTypes.string).isRequired,
  onClick: PropTypes.func.isRequired
};

export default ShopingItem;
