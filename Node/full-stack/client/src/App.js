import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentWillMount() {
    fetch("/api")
      .then(results => results.json())
      .then(data => {
        console.log(data);
        this.setState({
          data: data
        });
      });
  }
  render() {
    return (
      <>
        <ul>
          {this.state.data.map((user, index) => {
            return (
              <li key={user.id}>
                Id: {user.id} Username: {user.username}
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default App;
