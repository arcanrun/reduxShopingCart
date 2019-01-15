import React, { Component } from "react";
import ShopingListContainer from "./ShopingListContainer";
import BoughtListContainer from "./BoughtListContainer";
import { connect } from "react-redux";
import { getProducts } from "../actions/productsAction";

// const API = [
//   {
//     id: 1,
//     name: "Latte",
//     price: 10.15,
//     count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     size: ["tall", "grande", "venti"]
//   },
//   {
//     id: 2,
//     name: "Cappuchino",
//     price: 13.33,
//     count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     size: ["tall", "grande", "venti"]
//   },
//   {
//     id: 3,
//     name: "Espresso",
//     price: 3.25,
//     count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     size: ["tall", "grande", "venti"]
//   },
//   {
//     id: 4,
//     name: "Frappe",
//     price: 15.15,
//     count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     size: ["tall", "grande", "venti"]
//   },
//   {
//     id: 5,
//     name: "Mokka",
//     price: 20.51,
//     count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
//     size: ["tall", "grande", "venti"]
//   }
// ];

class App extends Component {
  componentDidMount() {
    this.props.getProducts();
  }
  render() {
    console.log(this.props.products);
    const { items, isFetching, error } = this.props.products;
    return (
      <>
        <ShopingListContainer
          shopingList={items}
          isFetching={isFetching}
          error
        />
        <BoughtListContainer />
      </>
    );
  }
}

const mapStateToProps = state => {
  // console.log(state.products.items);
  return {
    products: state.products
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getProducts: () => dispatch(getProducts())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
