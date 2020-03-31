import React, { Component } from "react";
import Gchild from "./Gchild";

class Child extends Component {
  render() {
    return (
      <>
        Child Component
        <br />
        <Gchild />
      </>
    );
  }
}

export default Child;
