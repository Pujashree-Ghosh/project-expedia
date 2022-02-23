import React from "react";
import "./navbar.css";
import logo1 from "../images/logo2.png";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";

function navbar() {
  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: "none",
      color: isActive ? "blue" : "black",
      padding: "10px",
      fontWeight: isActive ? "bold" : "normal",
    };
  };
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
            <Navbar.Brand>
              <Link to="/">
                <img
                  src={logo1}
                  width="140"
                  height="35"
                  className="d-inline-block align-top"
                  alt="logo"
                />
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <NavDropdown
                  title="More Travel"
                  id="collasible-nav-dropdown"
                  style={{ textDecoration: "none", color: "black" }}
                >
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
              <Nav className="NavLinks">
                <NavLink to="/SupportFooter" style={navLinkStyles}>
                  English
                </NavLink>
                <NavLink to="/support" style={navLinkStyles}>
                  Support
                </NavLink>
                <NavLink to="/Dummy" style={navLinkStyles}>
                  Trips
                </NavLink>
                <NavLink to="/SignIn" style={navLinkStyles}>
                  Sign In
                </NavLink>
                <NavLink to="/locationapi" style={navLinkStyles}>
                  Test
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default navbar;
