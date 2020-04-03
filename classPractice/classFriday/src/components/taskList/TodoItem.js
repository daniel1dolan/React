import React from "react";

const TodoItem = props => {
  let tasks = props.tasks;
  let completedTasks = props.completedTaskArray;
  console.log(tasks);
  console.log(completedTasks);
  let taskList = props.tasks.map((task, index) => {
    return (
      <li key={index}>
        {task}{" "}
        <button value={index} onClick={props.completedTask}>
          Mark as Complete.
        </button>
      </li>
    );
  });
  let completedTaskList = completedTasks.map((task, index) => {
    return <li key={index}>{task}</li>;
  });
  return (
    <>
      <h5>Tasks to complete: </h5>
      <ul>{taskList}</ul>
      <h5>Completed Tasks: </h5>
      <ul>{completedTaskList}</ul>
    </>
  );
};

export default TodoItem;
