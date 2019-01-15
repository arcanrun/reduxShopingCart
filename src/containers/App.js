import React, { Component } from "react";
import ShopingListContainer from "./ShopingListContainer";
import BoughtListContainer from "./BoughtListContainer";
import { connect } from "react-redux";
import { getProducts } from "../actions/productsAction";

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
          error={error}
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
