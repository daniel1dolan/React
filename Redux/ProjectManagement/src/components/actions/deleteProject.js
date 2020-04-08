let deleteProject = project => {
  console.log("deleteProject action called");
  return {
    type: "DeleteProject",
    projectData: {
      id: project
    }
  };
};

export default deleteProject;
