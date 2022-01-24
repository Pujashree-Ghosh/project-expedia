import React from "react";
import "./navbar.css";
import logo1 from "../images/logo2.png";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

function navbar() {
  return (
    <>
      <div>
        <Navbar
          className="navbar"
          collapseOnSelect
          expand="lg"
          bg="muted"
          variant="light"
        >
          <Container>
            <Navbar.Brand href="/">
              <img
                src={logo1}
                width="140"
                height="35"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown title="More Travel" id="collasible-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Stays</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">
                    Flights
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Cars</NavDropdown.Item>

                  <NavDropdown.Item href="#action/3.3">
                    Packages
                  </NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  <NavDropdown.Item href="#action/3.4">Deals</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Groups & Meetings
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Mobile</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav>
                <Nav.Link href="#deets">English</Nav.Link>
                <Nav.Link href="/support">Support</Nav.Link>
                <Nav.Link href="/trips">Trips</Nav.Link>
                <Nav.Link href="/sign">Sign In</Nav.Link>
                <Nav.Link href="/test">Test</Nav.Link>
                {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default navbar;
