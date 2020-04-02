import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

export default class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ""
    };
  }
  handleButtonPress = e => {
    if (e.target.value == "/" || "X" || "-" || "+") {
    }
    console.log(e.target.value);
    this.setState({ display: this.state.display + e.target.value });
  };
  clearButton = e => {
    this.setState({ display: "" });
  };
  runCalculation = e => {
    let displayArray = this.state.display.split("");
    console.log(displayArray);
    let operator = displayArray.filter(index => {
      let found = "";
      if (index == "/" || index == "X" || index == "-" || index == "+") {
        found = index;
      }
      return found;
    });
    let workArray = this.state.display.split(operator);
    console.log(workArray);
    console.log(operator);
    switch (operator[0]) {
      case "/":
        this.setState({
          display: (
            parseInt(workArray[0], 10) / parseInt(workArray[1], 10)
          ).toString()
        });
        break;
      case "X":
        this.setState({
          display: (
            parseInt(workArray[0], 10) * parseInt(workArray[1], 10)
          ).toString()
        });
        break;
      case "+":
        this.setState({
          display: (
            parseInt(workArray[0], 10) + parseInt(workArray[1], 10)
          ).toString()
        });
        break;
      case "-":
        this.setState({
          display: (
            parseFloat(workArray[0], 5) - parseFloat(workArray[1], 5)
          ).toString()
        });
        break;

      default:
        break;
    }
  };
  render() {
    return (
      <div className="fullCalculator">
        <Container fluid>
          <Row>
            <Col className="displayBox">{this.state.display}</Col>
          </Row>
          <Row>
            <Col className="buttonBox yellow">
              <button className="yellow" onClick={this.clearButton}>
                AC
              </button>
            </Col>
            <Col className="buttonBox yellow">+/-</Col>
            <Col className="buttonBox yellow">%</Col>
            <Col className="buttonBox yellow">
              <button
                className="yellow"
                value="/"
                onClick={this.handleButtonPress}
              >
                /
              </button>
            </Col>
          </Row>
          <Row>
            <Col className="buttonBox">
              <button value="7" onClick={this.handleButtonPress}>
                7
              </button>
            </Col>
            <Col className="buttonBox" onClick={this.handleButtonPress}>
              <button value="8" onClick={this.handleButtonPress}>
                8
              </button>
            </Col>
            <Col className="buttonBox" onClick={this.handleButtonPress}>
              <button value="9" onClick={this.handleButtonPress}>
                9
              </button>
            </Col>
            <Col className="buttonBox yellow">
              <button
                className="yellow"
                value="X"
                onClick={this.handleButtonPress}
              >
                X
              </button>
            </Col>
          </Row>
          <Row>
            <Col className="buttonBox" onClick={this.handleButtonPress}>
              <button value="4" onClick={this.handleButtonPress}>
                4
              </button>
            </Col>
            <Col className="buttonBox" onClick={this.handleButtonPress}>
              <button value="5" onClick={this.handleButtonPress}>
                5
              </button>
            </Col>
            <Col className="buttonBox" onClick={this.handleButtonPress}>
              <button value="6" onClick={this.handleButtonPress}>
                6
              </button>
            </Col>
            <Col className="buttonBox yellow" onClick={this.handleButtonPress}>
              <button
                className="yellow"
                value="-"
                onClick={this.handleButtonPress}
              >
                -
              </button>
            </Col>
          </Row>
          <Row>
            <Col className="buttonBox" onClick={this.handleButtonPress}>
              <button value="1" onClick={this.handleButtonPress}>
                1
              </button>
            </Col>
            <Col className="buttonBox" onClick={this.handleButtonPress}>
              <button value="2" onClick={this.handleButtonPress}>
                2
              </button>
            </Col>
            <Col className="buttonBox" onClick={this.handleButtonPress}>
              <button value="3" onClick={this.handleButtonPress}>
                3
              </button>
            </Col>
            <Col className="buttonBox yellow">
              <button
                className="yellow"
                value="+"
                onClick={this.handleButtonPress}
              >
                +
              </button>
            </Col>
          </Row>
          <Row>
            <Col xs={5} className="buttonBox">
              <button value="0" onClick={this.handleButtonPress}>
                0
              </button>
            </Col>
            <Col className="buttonBox">
              <button value="." onClick={this.handleButtonPress}>
                .
              </button>
            </Col>
            <Col className="buttonBox yellow">
              <button className="yellow" onClick={this.runCalculation}>
                =
              </button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
