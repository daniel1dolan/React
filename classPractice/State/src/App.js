import React, { Component } from "react";
import Child from "./Child";

export default class App extends Component {
  render() {
    return (
      <>
        <Child txt="Hello World" integer={21} />
      </>
    );
  }
}
