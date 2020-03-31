import React from "react";

function Virus(props) {
  return (
    <div>
      <div className="col s2">
        {props.country}
        <br />
        {props.cases}
      </div>
    </div>
  );
}

export default Virus;
