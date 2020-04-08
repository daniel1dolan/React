import React, { Component } from "react";
import ProjectItem from "./ProjectItem";
import { connect } from "react-redux";
import deleteProject from "../actions/deleteProject";

class Project extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let projectItem = this.props.projects.map(projectObj => {
      return (
        <ProjectItem
          project={projectObj}
          onDelete={this.props.onDeleteProject}
          key={projectObj.id}
        />
      );
    });
    return <ul>{projectItem}</ul>;
  }
}

let mapStateToProps = state => {
  return {
    projects: state.projects
  };
};

let mapDispatchToProps = dispatch => {
  return {
    onDeleteProject: projectData => dispatch(deleteProject(projectData))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Project);
