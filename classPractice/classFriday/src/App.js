import React, { Component } from "react";
import H1 from "./components/clickCount/H1";
import H2 from "./components/clickCount/H2";
import H3 from "./components/clickCount/H3";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0
    };
  }
  reset = params => {
    this.setState({ clicks: 0 });
  };
  increment = params => {
    this.setState({ clicks: this.state.clicks + 1 });
  };
  render() {
    return (
      <div
        style={{
          width: "400px",
          marginLeft: "auto",
          marginRight: "auto",
          paddingTop: "40px"
        }}
      >
        <H1 clicks={this.state.clicks} />
        <br />
        <H2 resets={this.reset} />
        <br />
        <H3 increments={this.increment} />
      </div>
    );
  }
}

export default App;
