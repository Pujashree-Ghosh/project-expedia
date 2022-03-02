import React from "react";
import "./support.css";
import SupportFooter from "../include/SupportFooter";

import Header from "../images/image3.jpg";
import { Card, Button, Accordion } from "react-bootstrap";
import { Link } from "react-router-dom";
function support() {
  return (
    <div className="Support">
      <div class="header">
        {/* <h1>Chania</h1> */}
        <Card className="supportHeader">
          <Card.Img
            href="#"
            class="headerimg"
            src={Header}
            alt="header"
            style={{
              margin: "0px",
              padding: "0px",
              height: "100px",
              width: "100%",
            }}
          />
          <Card.ImgOverlay>
            {/* <Col lg={4}> */}
            <Card.Text
              className="overlayText"
              style={{
                color: "white",
                marginTop: "10px",
                marginLeft: "110px",
                fontSize: "x-large",
                fontWeight: "bold",
              }}
            >
              Customer Service
            </Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>

      <div
        class="row justify-content-center"
        style={{
          backgroundColor: "rgb(241, 241, 253)",
          marginTop: "0px",
          marginRight: "0px",
          marginLeft: "0px",
        }}
      >
        <div class="col-10">
          <div class="col-3 menu">
            <div className="helpText">We're here to help.</div>
            <div
              style={{
                marginTop: "10px",
                marginLeft: "1px",
                fontSize: "20px",
                color: "gray",
              }}
            >
              Browse Help Topics
            </div>

            <div
              style={{
                marginTop: "10px",
                marginLeft: "1px",
              }}
              className="menuBox"
            >
              <div
                style={{
                  paddingTop: "10px",
                  paddingLeft: "15px",
                }}
              >
                <div className="service">
                  {/* <Card.Text style={{ fontSize: "15px" }}> */}
                  <b style={{ fontSize: "20px" }}>Customer Service</b>
                  {/* </Card.Text>
                  <Card.Text>Change & Cancel</Card.Text>
                  <Card.Text>Payment & Receipts</Card.Text>
                  <Card.Text>Refunds</Card.Text>
                  <Card.Text>sTravel Document</Card.Text>
                  <Card.Text>Account Security</Card.Text>
                  <Card.Text>Travel Alerts</Card.Text>
                  <Card.Text>Privacy</Card.Text> */}
                  <ul>
                    <li>Change & Cancel</li>
                    <li>Payment & Receipts</li>
                    <li>Refunds</li>
                    <li>Travel Document</li>
                    <li>Account Security</li>
                    <li>Travel Alerts</li>
                    <li>Privacy</li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <Accordion className="AccordianTab" style={{ marginTop: "10px" }}>
                <Accordion.Item eventKey="0">
                  <Accordion.Header style={{ fontWeight: "bold" }}>
                    Expeadia Rewards
                  </Accordion.Header>
                  <Accordion.Body>
                    <Link to="/#" style={{ textDecoration: "none" }}>
                      About Expedia Rewards{" "}
                    </Link>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </div>

          <div
            class="col-9"
            style={{
              marginTop: "48px",
              // marginLeft: "20px",
              paddingLeft: "20px",
              // width: "950px",
            }}
          >
            <b style={{ fontSize: "20px", color: "gray" }}>Popular Topics</b>
            <Accordion
              style={{
                marginTop: "8px",
                // marginLeft: "20px",
                // paddingLeft: "20px",
                // width: "950px",
              }}
            >
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  How we order your search results
                </Accordion.Header>
                <Accordion.Body>
                  <p>
                    There are many travel options available on our sites and we
                    want to make your search results as relevant as possible.
                    That’s why we offer lots of ways to help you search for and
                    plan your travel.
                  </p>
                  <p>
                    Our site uses complex, dynamic algorithms to ensure your
                    search results are ordered efficiently.
                  </p>
                  <p>
                    On the search results page, you can select how to sort the
                    results we display, and also use filter options to see only
                    those search results that meet your chosen preferences. If
                    you don’t decide to use these features, then you’ll see our
                    chosen default sort order which orders results as follows:
                  </p>
                  <ul>
                    <b>Flights</b>
                    <li>
                      Results are ordered lowest to highest price. Where two
                      flights have the same price, the shorter flight is listed
                      first.
                    </li>
                  </ul>
                  <ul>
                    <b>Accommodation</b>
                    <li>
                      Results are ordered starting with the most relevant and
                      competitive offers based on a range of factors, including
                      a property’s offered price compared to its historical
                      prices, its guest rating, number of reviews, number of
                      bookings to date, and location (relative to your
                      destination search).
                    </li>
                    <li>
                      {" "}
                      They are also further differentiated by traveller
                      satisfaction factors, including the range and quality of
                      images and information provided for properties, the number
                      of guest relocations and the number of refunds due to
                      complaints about stays, property availability on our
                      sites, and the overall price competitiveness for our
                      travellers.
                    </li>

                    <li>
                      In addition, how much we are paid (eg: commissions from
                      accommodation or compensation on bookings) when you book a
                      property and such booking is completed is one of the
                      factors taken into consideration when determining the
                      relative order of properties with similar offers in our
                      search results listings. What we are paid recognises the
                      part we play in listing the property on our site,
                      facilitating the booking and facilitating your stay at the
                      property. Where we are displaying properties with a
                      similar offer, then a booking from which we are paid more
                      commission or compensation will feature higher in our
                      search results listing compared to other properties with
                      similar offers where we are paid less commission or
                      compensation on the booking.
                    </li>
                  </ul>
                  <ul>
                    <b>Cars</b>
                    <li>
                      Results are ordered by taking into account price and other
                      factors such as the number of bookings of an offer to
                      date, customer review scores, car category/type and
                      pick-up location relative to your arrival location.
                    </li>
                  </ul>
                  <ul>
                    <b>Cruises</b>
                    <li>
                      Results are ordered by taking into account factors such as
                      cruise line rating, ship rating, price per day, origin
                      rating, destination rating, length of cruise and booking
                      window.
                    </li>
                  </ul>
                  <ul>
                    <b>Things to Do</b>
                    <li>
                      Results are ordered by taking into account factors such as
                      price, searched-for experiences, location including
                      distance from accommodation options, traveller reviews and
                      local research. In addition, they may also take into
                      account number of bookings to date and compensation we may
                      earn on a booking.
                    </li>
                  </ul>
                  <ul>
                    <b>Combined Searches and Vacation Packages</b>
                    <li>
                      Results are ordered by the criteria outlined above for
                      each individual component.
                    </li>
                  </ul>
                  <p>
                    If you select a specific sort order option such as those
                    prioritising price, deals, guest reviews, property class or
                    rating, distance from centre, etc., the results list will be
                    ordered with a focus on your selected priorities, using the
                    factors described above as they relate to your search. This
                    will also be the case for some pages that showcase offers in
                    a destination or for a style of accommodation, etc.
                  </p>
                  <p>
                    If you apply a filter, the results list will be presented
                    using the factors described above as they relate to your
                    search, filtered by the specific feature(s) and amenity(ies)
                    you've selected.
                  </p>
                  <p>
                    We're constantly updating our systems and testing new ways
                    to refine your results to make them as relevant as possible
                    to accommodate your needs.
                  </p>
                  <hr></hr>
                  <b>Was this topic helpful?</b>
                  <Button variant="outline-secondary">Yes</Button>
                  <Button variant="outline-secondary">No</Button>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Book a flight using an airline credit
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>'Private host' listings</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Government travel alerts and warnings
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>Online flight check-in</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="5">
                <Accordion.Header>Change or cancellation fees</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="6">
                <Accordion.Header>Pending Charges</Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="7">
                <Accordion.Header>
                  Payment security and options
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="8">
                <Accordion.Header>
                  International travel documents
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="9">
                <Accordion.Header>
                  Roundtrip flights with 2 one-way fares
                </Accordion.Header>
                <Accordion.Body>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>

          {/* <div class="col-3 right">
            <div class="aside">
              <h2>What?</h2>
              <p>Chania is a city on the island of Crete.</p>
              <h2>Where?</h2>
              <p>Crete is a Greek island in the Mediterranean Sea.</p>
              <h2>How?</h2>
              <p>You can reach Chania airport from all over Europe.</p>
            </div>
          </div> */}
        </div>
      </div>

      <SupportFooter />
    </div>
  );
}

export default support;
