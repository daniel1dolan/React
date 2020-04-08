import React, { Component } from "react";
import { connect } from "react-redux";

class App extends Component {
  handleDelete = e => {
    e.preventDefault();
    console.log("handle delete recieved", this.props.project.id);
    this.props.onDelete(this.props.project.id);
  };
  render() {
    return (
      <>
        <h1>Projects</h1>
        {this.props.projects.map((project, index) => {
          return (
            <div key={index}>
              {project.title} | {project.category}
            </div>
          );
        })}
      </>
    );
  }
}

let mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

export default connect(mapStateToProps, null)(App);
