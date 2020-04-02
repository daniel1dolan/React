import React, { Component } from "react";
import "./App.css";

class Forms extends Component {
  constructor(props) {
    super(props);

    this.state = {
      txtValue: "",
      isValid: false,
      selectValue: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
  };
  handleChange = e => {
    let targetType =
      e.target.type == "checkbox" ? e.target.checked : e.target.value;

    // console.log(targetType);
    let name = e.target.name;
    // console.log(name);
  };
  render() {
    return (
      <div className="todo-form">
        <form onSubmit={this.handleSubmit}>
          <input
            name="txtValue"
            value={this.state.txtValue}
            type="text"
            onChange={this.handleChange}
          />
          <br />
          <input
            name="isValid"
            value={this.state.isValid}
            type="checkbox"
            onChange={this.handleChange}
          />
          <br />
          <select
            name="selectValue"
            value={this.state.selectValue}
            onChange={this.handleChange}
          >
            <option value="New York">New York</option>
            <option value="Houston">Houston</option>
            <option value="Los Angeles">Los Angeles</option>
            <option value="Atlanta">Atlanta</option>
            <option value="Austin">Austin</option>
          </select>
          <br />
          <button type="submit" value="submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default Forms;
