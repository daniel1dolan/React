let addProject = project => {
  return {
    type: "AddProject",
    projectData: {
      id: project.id,
      title: project.title,
      category: project.category
    }
  };
};

export default addProject;
