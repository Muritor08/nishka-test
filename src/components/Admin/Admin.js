import React from "react";
// import { Switch, Route } from "react-router-dom";
// import IPO from "./IPO";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Admin() {
  return (
    <div>
      <Navbar bg="light" variant="light" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
              <img src="/NishkaEra_Logo.png" alt="Nishkaera" height="30"/>
          </Navbar.Brand>
          <Nav className="me-end">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
