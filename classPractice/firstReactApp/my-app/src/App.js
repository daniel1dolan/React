import React from "react";

function App(props) {
  return (
    <div>
      <div className="col s2">
        <div className="card hoverable small">
          <div className="card-image">
            <img src="http://lorempixel.com/400/400/nature/" />
          </div>
          <div className="card-content">
            <p>Corona Virus PPE</p>
            <p>{props.name}</p>
          </div>
          <div className="card-action">
            <a href="#">$ {props.price ? props.price : 59.99}</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
