import React from "react";
import Footer from "../include/Footer";
import FooterLinks from "../include/FooterLinks";
import GetTheApp from "../include/GetTheApp";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import tripsLogo from "../images/lock1.jpg";
import { BiChevronRight } from "react-icons/bi";
function Trips() {
  return (
    <div>
      <div
        class="row justify-content-center"
        style={{
          // backgroundColor: "rgb(241, 241, 253)",
          marginTop: "0px",
          marginRight: "0px",
          marginLeft: "0px",
          margin: "0px",
        }}
      >
        <div class="col-10 ">
          <div class="row justify-content-center">
            <div
              class="col-6 "
              style={
                {
                  // backgroundColor: "beige",
                }
              }
            >
              <h4
                style={{
                  fontSize: "40px",
                  fontWeight: "bold",
                }}
              >
                Trips
              </h4>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  marginTop: "20px",
                }}
              >
                <img
                  src={tripsLogo}
                  width="200"
                  height="200"
                  className="d-inline-block align-top"
                  alt="logo"
                />
              </div>

              <Button
                className="tripsBtn"
                as={Link}
                to="/SignIn"
                style={{
                  width: "100%",
                  height: "40px",
                  marginTop: "70px",
                  marginBottom: "20px",

                  backgroundColor: "#1aa3f3",
                  border: "none",
                  borderRadius: "8px",
                }}
              >
                <b>Sign in or create free account</b>
              </Button>
              <div>
                <Card
                  className="tripscard"
                  as={Link}
                  to="/Itinerary"
                  expand="lg"
                  bg="mute"
                  variant="light"
                  style={{
                    width: "100%",
                    marginTop: "50px",
                    marginBottom: "50px",
                    height: "80px",
                    textDecoration: "none",
                    color: "black",
                    borderRadius: "8px",
                    marginLeft: "0px",
                  }}
                >
                  <Card.Body
                    className="tripscard.body"
                    style={{
                      paddingTop: "0px",
                      paddingLeft: "5px",
                      paddingRight: "20px",
                    }}
                  >
                    <div class="row">
                      <div class="col-10" style={{ margin: "0px" }}>
                        <b>Want to see a booking without signing in?</b>
                        <h6>Use an itinerary number to access it</h6>
                      </div>
                      <div
                        class="col-2"
                        style={{
                          margin: "0px",
                          // backgroundColor: "yellow",
                          display: "flex",
                          justifyContent: "flex-end",
                          alignItems: "center",
                        }}
                      >
                        <BiChevronRight />
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </div>
            </div>
          </div>
          <GetTheApp />
          <FooterLinks />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Trips;
