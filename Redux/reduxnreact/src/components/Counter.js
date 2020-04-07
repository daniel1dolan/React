import React, { Component } from "react";
import { connect } from "react-redux";
import increaseAction from "../actions/increaseAction";
import decreaseAction from "../actions/decreaseAction";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "hello"
    };
  }
  render() {
    return (
      <>
        <h1>{this.state.title}</h1>
        <span>{this.props.count}</span>
        <br />
        <button onClick={this.props.onIncreaseClick}>Increase</button>
        <button onClick={this.props.onDecreaseClick}>Decrease</button>
      </>
    );
  }
}

//Maps global state to property in component
let mapStateToProps = state => {
  return {
    count: state.count
  };
};

//Allows the store to invoke the function. Reason for syntax.
let mapDispatchToProps = dispatch => {
  return {
    onIncreaseClick: () => dispatch(increaseAction()),
    onDecreaseClick: () => dispatch(decreaseAction())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
