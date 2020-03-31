import React, { Component } from "react";
import { Media } from "react-bootstrap";

export default class Comment extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Media>
        <img
          width={64}
          height={64}
          className="mr-3"
          src={this.props.img}
          alt="Generic placeholder"
        />
        <Media.Body>
          <h4>{this.props.name}</h4>
          <p>{this.props.description}</p>

          {this.props.responses.map(response => {
            return (
              <Media key={response.id}>
                <img
                  width={64}
                  height={64}
                  className="mr-3"
                  src={response.img}
                  alt="Generic placeholder"
                />
                <Media.Body>
                  <h5>{response.name}</h5>
                  <p>{response.description}</p>
                </Media.Body>
              </Media>
            );
          })}
        </Media.Body>
      </Media>
    );
  }
}
