import React, { useState } from "react";
import "./navbar.css";
import logo1 from "../images/logo2.png";
import { GiHamburgerMenu } from "react-icons/gi";

import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";

function MyNavbar() {
  const [isMobile, setIsMobile] = useState(false);
  // const NavLinkStyles = ({ isActive }) => {
  //   return {
  //     textDecoration: "none",
  //     color: isActive ? "blue" : "black",
  //     padding: "10px",
  //     fontWeight: isActive ? "bold" : "normal",
  //   };
  // };
  return (
    <>
      {/* <div>
        <Navbar
          className="navbar"
          collapseOnSelect
          expand="lg"
          bg="muted"
          variant="light"
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
                   <NavDropdown.Divider /> 
                  <NavDropdown.Item href="#action/3.4">Deals</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">
                    Groups & Meetings
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.4">Mobile</NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="NavLinks">
                <NavLink to="/SupportFooter" style={NavLinkStyles}>
                  English
                </NavLink>
                <NavLink to="/support" style={NavLinkStyles}>
                  Support
                </NavLink>
                <NavLink to="/Dummy" style={NavLinkStyles}>
                  Trips
                </NavLink>
                <NavLink to="/SignIn" style={NavLinkStyles}>
                  Sign In
                </NavLink>
                <NavLink to="/locationapi" style={NavLinkStyles}>
                  Test
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div> */}
      <nav className="myNavbar">
        <div class="row justify-content-center">
          <div class="col-10">
            <div class="row">
              <NavLink to="/" className="expedia">
                <img
                  src={logo1}
                  width="140"
                  height="35"
                  // className="d-inline-block align-top"
                  alt="logo"
                />
              </NavLink>

              <div
                className={
                  isMobile ? "nav-links mobile-nav-NavLinks" : "nav-links"
                }
              >
                <ul>
                  <li>
                    <NavLink to="/SupportFooter" className="english">
                      English
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/support" className="support">
                      Support
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/Dummy" className="trips">
                      Trips
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/SignIn" className="signin">
                      Sign In
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/locationapi" className="test">
                      Test
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <button className="mobile-menu-icon">
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <i className="fas fa-bars"></i>
          )}
        </button> */}
        <div className="hamburger-menu">
          <a href="#" onClick={() => setIsMobile(!isMobile)}>
            <GiHamburgerMenu />
          </a>
        </div>
      </nav>
    </>
  );
}

export default MyNavbar;
