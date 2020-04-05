import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import AddProject from "./AddProject";
import Project from "./Project";

class ProjectManagement extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  componentWillMount() {
    this.setState({
      projects: [
        {
          id: uuidv4(),
          title: "Javascript",
          category: "Front-End"
        },
        {
          id: uuidv4(),
          title: "Node",
          category: "Back-End"
        },
        {
          id: uuidv4(),
          title: "React",
          category: "Front-End"
        }
      ]
    });
  }
  handleAddProject = newProject => {
    let oldProjects = this.state.projects;
    oldProjects.push(newProject);
    this.setState({ projects: oldProjects }, () => {
      console.log(this.state.projects);
    });
  };
  handleDeleteProject = id => {
    let oldProjects = this.state.projects;
    let index = oldProjects.findIndex(pObj => {
      return pObj.id === id;
    });
    oldProjects.splice(index, 1);
    this.setState({ projects: oldProjects });
  };
  render() {
    console.log(this.state.projects);
    return (
      <>
        <AddProject
          addProject={project => {
            this.handleAddProject(project);
          }}
        />
        <br />
        <h4>Projects</h4>
        <Project
          projects={this.state.projects}
          onDelete={id => {
            this.handleDeleteProject(id);
          }}
        />
      </>
    );
  }
}

export default ProjectManagement;
