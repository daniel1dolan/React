import React, { Component } from "react";
import SimpleDropdown from "./SimpleDropdown";
import { Container, Row, Col } from "react-bootstrap";
import Drop from "./components/Drop";

let daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

class App extends Component {
  render() {
    return (
      <Container fluid>
        <Row>
          <Col md={{ span: 4, offset: 4 }}>
            {/* <SimpleDropdown days={daysOfWeek} /> */}
            <Drop days={daysOfWeek} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div
//         style={{
//           backgroundColor: "green",
//           padding: "15px",
//           margin: "50px"
//         }}
//       >
//         <Parent />
//       </div>
//     );
//   }
// }

// import React, { Component } from "react";
// import Virus from "./components/Virus";
// import data from "./data/virus";

// class App extends Component {
//   render() {
//     let newDataSet = data.map((cdc, index) => {
//       return <Virus country={cdc.country} cases={cdc.numViruses} key={index} />;
//     });
//     return <div className="row">{newDataSet}</div>;
//   }
// }

// function App(props) {
//   let newDataSet = data.map(cdc => {
//     return <Virus country={cdc.country} cases={cdc.numViruses} />;
//   });
//   return (
//     <div>
//       <div className="row">{newDataSet}</div>
//     </div>
//   );
// }

// export default App;
