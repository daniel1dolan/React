import React, { Component } from "react";
import H1 from "./lifting/H1";
import H2 from "./lifting/H2";
import H3 from "./lifting/H3";

class LiftingState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }
  reset = () => {
    this.setState({
      clicks: 0
    });
  };
  updateClickCount = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  render() {
    return (
      <>
        <H1 clicks={this.state.clicks} />
        <br />
        <H2 reset={this.reset} />
        <br />
        <H3 increment={this.updateClickCount} />
        <br />
      </>
    );
  }
}

export default LiftingState;
