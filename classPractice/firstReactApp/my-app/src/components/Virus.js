import React from "react";

function Virus(props) {
  return (
    <div>
      {props.virus}
      <br />
      {props.country}
    </div>
  );
}

export default Virus;
