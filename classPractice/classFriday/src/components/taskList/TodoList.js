import React, { Component } from "react";
// import "../App.css";
import Input from "./Input";
import TodoItem from "./TodoItem";

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      inputTxt: "",
      completedTasks: []
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
    let selectedTask = e.target.value;
    let taskArray = this.state.tasks;
    let completeArray = this.state.completedTasks;
    completeArray.push(taskArray[selectedTask]);
    delete taskArray[selectedTask];
    this.setState({ tasks: taskArray, completedTasks: completeArray });
  };
  render() {
    return (
      <div>
        <br />
        <Input
          txt={this.state.inputTxt}
          handleChange={this.handleInput}
          addTask={this.addTaskItem}
        />
        <br />
        <TodoItem
          tasks={this.state.tasks}
          completedTask={this.completeTask}
          completedTaskArray={this.state.completedTasks}
        />
      </div>
    );
  }
}

export default TodoList;
