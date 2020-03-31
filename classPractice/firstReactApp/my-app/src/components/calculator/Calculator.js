import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./styles.css";

export default class Calculator extends Component {
  render() {
    return (
      <div className="fullCalculator">
        <Container fluid>
          <Row>
            <Col className="displayBox">0</Col>
          </Row>
          <Row>
            <Col className="buttonBox yellow">AC</Col>
            <Col className="buttonBox yellow">+/-</Col>
            <Col className="buttonBox yellow">%</Col>
            <Col className="buttonBox yellow">/</Col>
          </Row>
          <Row>
            <Col className="buttonBox">7</Col>
            <Col className="buttonBox">8</Col>
            <Col className="buttonBox">9</Col>
            <Col className="buttonBox yellow">X</Col>
          </Row>
          <Row>
            <Col className="buttonBox">4</Col>
            <Col className="buttonBox">5</Col>
            <Col className="buttonBox">6</Col>
            <Col className="buttonBox yellow">-</Col>
          </Row>
          <Row>
            <Col className="buttonBox">1</Col>
            <Col className="buttonBox">2</Col>
            <Col className="buttonBox">3</Col>
            <Col className="buttonBox yellow">+</Col>
          </Row>
          <Row>
            <Col xs={5} className="buttonBox">
              0
            </Col>
            <Col className="buttonBox">.</Col>
            <Col className="buttonBox yellow">=</Col>
          </Row>
        </Container>
      </div>
    );
  }
}
