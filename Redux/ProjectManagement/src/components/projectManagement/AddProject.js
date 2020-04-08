import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Col } from "react-bootstrap";
import { connect } from "react-redux";
import addProject from "../actions/addProject";

class AddProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      category: "Front-End"
    };
  }
  handleTitleChange = e => {
    this.setState({
      title: e.target.value
    });
  };
  handleCategoryChange = e => {
    this.setState({
      category: e.target.value
    });
  };
  handleSubmit = e => {
    // console.log(this.refs.title.value);

    // console.log(this.refs.category.value)

    e.preventDefault();

    this.props.onAddProject({
      id: uuidv4(),
      title: this.state.title,
      category: this.state.category
    });
  };

  render() {
    return (
      <>
        <h3>Add Project</h3>

        <form onSubmit={this.handleSubmit}>
          <div>
            <Form.Group>
              <Form.Row>
                <Col>
                  <Form.Control
                    size="lg"
                    ref="title"
                    type="text"
                    placeholder="Title"
                    onChange={this.handleTitleChange}
                  />
                </Col>
              </Form.Row>
              <br />
            </Form.Group>
          </div>

          <div>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label>Category</Form.Label>
              <Form.Control
                as="select"
                size="lg"
                custom
                ref="category"
                onChange={this.handleCategoryChange}
              >
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
              </Form.Control>
            </Form.Group>
          </div>

          <input className="buttonStyle" type="submit" value="submit" />
        </form>
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

let mapDispatchToProps = dispatch => {
  return {
    onAddProject: projectData => dispatch(addProject(projectData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProject);
