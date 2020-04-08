import React from "react";

class ProjectItem extends React.Component {
  constructor(props) {
    super(props);
  }
  handleDelete = e => {
    e.preventDefault();
    console.log("handle delete recieved", this.props.project.id);
    this.props.onDelete(this.props.project.id);
  };
  render() {
    return (
      <div>
        <li>
          <span
            style={{
              padding: "0px 10px 10px 0px",
              fontSize: "20px",
              fontWeight: "bold"
            }}
          >
            {this.props.project.title}
          </span>

          {this.props.project.category}

          <a
            href="#"
            style={{ color: "maroon", fontSize: "25px", paddingLeft: "5px" }}
            onClick={this.handleDelete}
          >
            x
          </a>
        </li>
      </div>
    );
  }
}

export default ProjectItem;
