import React, { Component } from "react";

class SimpleList extends Component {
  render() {
    let days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ];
    let output = days.map((day, index) => {
      return <li key={index}>{day}</li>;
    });
    return <ul>{output}</ul>;
  }
}

export default SimpleList;
