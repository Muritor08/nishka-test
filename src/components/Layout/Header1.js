import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./Header.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Header() {
  const Styles = {
    color: "#3AD4AF",
    textDecoration: "none",
  };

  return (
    <div className="navNishkaEra">
      <Navbar
        collapseOnSelect
        expand="md"
        fixed="top"
        className="custom-navbar"
      >
        {/* <Navbar.Brand href="#home">Nishka Era</Navbar.Brand> */}
        <Navbar>
          {/* <Navbar.Brand> */}
          <Link style={Styles} to="/">
            <img
              src="/NishkaEra_Logo.png"
              width="auto"
              height="50"
              className="d-inline-block align-top align-items-center navImg"
              alt="Nishka Era logo"
            />
          </Link>
          {/* </Navbar.Brand> */}
        </Navbar>
        <br />
        <Nav></Nav>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="navbar-items">
          <Nav className="navigationBar">
            {/* <Nav.Link href="#"><Link style={Styles} to="/" ></Link></Nav.Link> */}
            <Nav.Link href="/OurStory">Our Story</Nav.Link>
            <Nav.Link href="/#FinancialPulse">Financial Pulse </Nav.Link>
            <NavDropdown title="Resources" id="collasible-nav-dropdown">
              <NavDropdown.Item style={Styles} href="/Learn">
                  Learn
              </NavDropdown.Item>
              {/* <NavDropdown.Item style={Styles} href="/Invest">
                  Invest
              </NavDropdown.Item>
              <NavDropdown.Item style={Styles} href="/Grow">
                  Grow
              </NavDropdown.Item> */}
              {/* <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>
            <Nav.Link href="/#WomenSpecial">Women Special</Nav.Link>
            <Nav.Link href="/#Latest">Latest</Nav.Link>
{/*             
            <NavDropdown title="Markets" id="collasible-nav-dropdown">
              <NavDropdown.Item style={Styles} href="/IpoWatch">
             
                  IPO Watch
              
              </NavDropdown.Item>
              <NavDropdown.Item style={Styles} href="/ResultsCorner">
            
                  Results Corner
              
              </NavDropdown.Item>
            </NavDropdown>
             */}
            {/* <Nav.Link href="/Login">Login</Nav.Link> */}
          </Nav>
          {/* <Nav className="rightNavProfile">
                        <Nav.Link href="#deets" >Login</Nav.Link>
                        <Nav.Link eventKey={2} href="#memes">
                            Get Registered
                        </Nav.Link>
                    </Nav> */}
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
