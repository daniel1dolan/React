import React, { Component } from "react";
import PropTypes from "prop-types";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      txt: "this is a text value",
      num1: 5,
      num2: 10
    };
    // setTimeout(() => {
    //   this.setState({ txt: "hello world" });
    // }, 2000);
  }
  handleUpdate() {
    console.log("button was clicked");
    this.setState({ num1: this.state.num1 + 1 });
  }
  updatePlus3() {
    this.setState({ num1: this.state.num1 + 3 });
  }
  updateMinus3() {
    this.setState({ num1: this.state.num1 - 3 });
  }
  render() {
    return (
      <>
        <h1>{this.state.txt}</h1>
        <p>
          {this.state.num1} + {this.state.num2} ={" "}
          {this.state.num1 + this.state.num2}
        </p>
        <button onClick={this.handleUpdate.bind(this)}>Click me</button>
        <button onClick={this.updatePlus3.bind(this)}>+3</button>
        <button onClick={this.updateMinus3.bind(this)}>-3</button>
      </>
    );
  }
}

// class Child extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     }
//   }
//   render() {
//     return (
//       <>
//         <h1>{this.props.txt}</h1>
//         {3 * this.props.integer}
//       </>
//     );
//   }
// }

// Child.PropTypes = {
//   txt: PropTypes.string,
//   integer: PropTypes.number,
//   integer: PropTypes.number.isRequired
// };

export default Child;
