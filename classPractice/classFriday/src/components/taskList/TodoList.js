import React, { Component } from "react";
// import "../App.css";
import Input from "./Input";
import TodoItem from "./TodoItem";

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
  completeTask = e => {
    let completedTask = e.target.id;
    console.log(completedTask);
  };
  render() {
    return (
      <div>
        <br />
        <Input
          txt={this.state.inputTxt}
          handleChange={this.handleInput}
          addTask={this.addTaskItem}
          completeTask={this.completeTask}
        />
        <br />
        <TodoItem tasks={this.state.tasks} />
      </div>
    );
  }
}

export default TodoList;
