import React from "react";

const Input = props => {
  return (
    <>
      <input type="text" value={props.txt} onChange={props.handleChange} />
      <button onClick={props.addTask}>Add Task</button>
    </>
  );
};

export default Input;
