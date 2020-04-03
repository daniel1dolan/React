import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import AddProject from "./AddProject";

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

  render() {
    console.log(this.state.projects);
    return (
      <>
        <AddProject
          addProject={project => {
            this.handleAddProject(project);
          }}
        />
      </>
    );
  }
}

export default ProjectManagement;
