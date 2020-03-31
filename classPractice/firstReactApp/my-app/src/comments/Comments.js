import React, { Component } from "react";
import Comment from "./Comment";
import data from "./commentData";

export default class Comments extends Component {
  render() {
    return (
      <>
        {data.comments.map(comment => {
          return (
            <Comment
              name={comment.name}
              description={comment.description}
              img={comment.img}
              responses={comment.responses}
              key={comment.id}
            />
          );
        })}
      </>
    );
  }
}
