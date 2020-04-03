import React from "react";

const TodoItem = props => {
  let tasks = props.tasks;
  console.log(tasks);
  let taskList = props.tasks.map((task, index) => {
    return (
      <li key={index}>
        {task}{" "}
        <button id={index} onClick={props.completeTask}>
          Mark as Complete.
        </button>
      </li>
    );
  });
  return (
    <>
      <h5>Tasks to complete: </h5>
      <ul>{taskList}</ul>
      <h5>Completed Tasks: </h5>
    </>
  );
};

export default TodoItem;
