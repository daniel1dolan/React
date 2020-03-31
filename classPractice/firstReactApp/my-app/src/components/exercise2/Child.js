import React, { Component } from "react";
import GrandChild from "./Grandchild";

class Child extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "yellow", padding: "15px" }}>
        I'm a child <br />
        <GrandChild />
      </div>
    );
  }
}

export default Child;
