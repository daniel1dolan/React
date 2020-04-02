import React, { Component } from "react";
// import Child from "./Child";
// import News from "./News";
import TodoList from "./Todo/TodoList";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <TodoList />
      </div>
    );
  }
}
