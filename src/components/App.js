import React, { Component } from "react";
import ShopingListContainer from "../containers/ShopingListContainer";
import BoughtListContainer from "../containers/BoughtListContainer";

const API = [
  {
    id: 1,
    name: "Latte",
    price: 10.15,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    size: ["tall", "grande", "venti"]
  },
  {
    id: 2,
    name: "Cappuchino",
    price: 13.33,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    size: ["tall", "grande", "venti"]
  },
  {
    id: 3,
    name: "Espresso",
    price: 3.25,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    size: ["tall", "grande", "venti"]
  },
  {
    id: 4,
    name: "Frappe",
    price: 15.15,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    size: ["tall", "grande", "venti"]
  },
  {
    id: 5,
    name: "Mokka",
    price: 20.51,
    count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    size: ["tall", "grande", "venti"]
  }
];

class App extends Component {
  render() {
    return (
      <>
        <ShopingListContainer shopingList={API} />
        <BoughtListContainer />
      </>
    );
  }
}

export default App;
