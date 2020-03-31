import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  render() {
    return (
      <>
        Parent Component
        <br />
        <Child />
      </>
    );
  }
}

export default Parent;
