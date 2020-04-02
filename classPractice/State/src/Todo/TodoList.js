import React, { Component } from "react";
import "../App.css";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputTxt: ""
    };
  }
  handleInput = e => {
    this.setState({ inputTxt: e.target.value });
  };
  addTaskItem = params => {
    let input = this.state.inputTxt;
    let tasks = this.state.tasks;
    tasks.push(input);
    // this.setState({ tasks: tasks });
    this.setState({ tasks: tasks, inputTxt: "" }, () => {
      console.log(this.state.tasks);
    });
  };
  render() {
    let { tasks, inputTxt } = this.state;
    let taskList = tasks.map((task, index) => {
      return <li key={index}>{task}</li>;
    });
    return (
      <div className="todo-form">
        {/* {this.state.inputTxt} */}
        <br />
        <input
          type="text"
          value={this.state.inputTxt}
          onChange={this.handleInput}
        />
        <button onClick={this.addTaskItem}>Add Task</button>
        <br />

        <ul>{taskList}</ul>
      </div>
    );
  }
}

export default TodoList;
