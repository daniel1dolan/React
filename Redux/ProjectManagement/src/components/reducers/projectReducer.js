import { v4 as uuidv4 } from "uuid";

let projectReducer = (state, action) => {
  if (state === undefined) {
    state = {
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
    };
  }
  switch (action.type) {
    case "AddProject":
      return {
        ...state,
        projects: state.projects.concat(action.projectData)
      };
    case "DeleteProject":
      let updateArray = state.projects.filter(item => {
        return item.id != action.projectData.id;
      });
      return {
        ...state,
        projects: updateArray
      };
    default:
      return state;
  }
};

export default projectReducer;
