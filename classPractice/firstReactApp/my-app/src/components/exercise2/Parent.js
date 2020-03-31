import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  render() {
    return (
      <>
        I'm a Parent
        <br />
        <Child />
      </>
    );
  }
}

export default Parent;
