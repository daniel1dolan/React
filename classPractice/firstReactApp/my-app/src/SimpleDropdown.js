import React, { Component } from "react";

export default class SimpleDropdown extends Component {
  constructor(props) {
    super(props);
  }
  optionList = () => {
    return this.props.days.map((day, index) => {
      return (
        <option key={index} value={day}>
          {day}
        </option>
      );
    });
  };

  render() {
    return (
      <>
        <select>
          {this.optionList()}
          {/* {this.props.days.map((day, index) => {
            return (
              <option key={index} value={day}>
                {day}
              </option>
            );
          })} */}
        </select>
      </>
    );
  }
}
