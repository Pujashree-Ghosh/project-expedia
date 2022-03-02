import React from "react";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import logo1 from "../images/logo2.png";
import { BsGlobe } from "react-icons/bs";
function nvbr() {
  const NavLinkStyles = ({ isActive }) => {
    return {
      textDecoration: "none",
      color: isActive ? "blue" : "black",
      padding: "10px",
      fontWeight: isActive ? "bold" : "normal",
    };
  };
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="muted"
        variant="light"
        style={{
          borderStyle: "solid",
          borderColor: "rgb(180, 179, 179)",
          borderWidth: "0.1px",
          borderTop: "none",
          borderLeft: "none",
          borderRight: "none",
        }}
      >
        <Container>
          <Navbar.Brand>
            <NavLink to="/">
              <img
                src={logo1}
                width="140"
                height="35"
                className="d-inline-block align-top"
                alt="logo"
              />
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#features">Features</Nav.Link> */}
              {/* <Nav.Link href="#pricing">Pricing</Nav.Link> */}
              <NavDropdown
                title="More Travel"
                id="collasible-nav-dropdown"
                style={{ textDecoration: "none", color: "black" }}
              >
                <NavDropdown.Item href="#action/3.1">Stays</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Flights</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Cars</NavDropdown.Item>

                <NavDropdown.Item href="#action/3.3">Packages</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Deals</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                  Groups & Meetings
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">Mobile</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Link to="/Dummy" className="nav-link">
                <BsGlobe /> English
              </Link>
              <Link to="/support" className="nav-link">
                Support
              </Link>
              <Link to="/Trips" className="nav-link">
                Trips
              </Link>
              <Link to="/SignIn" className="nav-link">
                Sign In
              </Link>
              <Link to="/Tab" className="nav-link">
                Test
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default nvbr;
