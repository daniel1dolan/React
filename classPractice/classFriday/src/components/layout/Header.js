import React from "react";
import { Navbar, Form, Nav, Button, FormControl } from "react-bootstrap";

const Header = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Friday Class</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="/">Click Counter</Nav.Link>
          <Nav.Link href="/todo">Todo List</Nav.Link>
          <Nav.Link href="/projectmanagement">Project Management</Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
};

export default Header;
