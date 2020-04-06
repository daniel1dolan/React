import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      increasing: false
    };
  }
  componentWillReceiveProps(nextProps) {
    console.log("will receive props");

    console.log(`${this.props.test}`);
    console.log(`${nextProps.test}`);
    let increasing = nextProps.test > this.props.test;
    this.setState(
      {
        increasing: increasing
      },
      () => {
        console.log("state of increasing:", this.state.increasing);
      }
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    //Condition to check whether the component should update
  }
  render() {
    return (
      <>
        Child
        <br />
        {this.props.test}
      </>
    );
  }
  componentDidUpdate(prevProps, preState) {
    console.log(`componentDidUpdate prevProps: ${prevProps.val}`);
    //Sends a message if a component is updated, or do something else.
  }
}

export default Child;
