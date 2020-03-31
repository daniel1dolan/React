import React, { Component } from "react";
import { Dropdown } from "react-bootstrap";

export default class Drop extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Dropdown Button
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {this.props.days.map((day, index) => {
            return (
              <Dropdown.Item key={index} value={day}>
                {day}
              </Dropdown.Item>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}
