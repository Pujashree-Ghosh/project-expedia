import React from "react";
import "./HotelDetails.css";
import HotelCards from "./HotelCards";
import LocationApi from "./locationapi";
// import Hotel from "../images/Hotel.jpg";
import {
  Card,
  Form,
  FloatingLabel,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { Checkbox } from "@material-ui/core";

import FormControl from "@mui/material/FormControl";
// import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";

// import { Grid, ButtonBase, Typography } from "@material-ui/core";

import { useLocation } from "react-router-dom";

function HotelDetails() {
  const location = useLocation();
  // console.log(location.state?.hotelsList);
  console.log(location.state);

  console.log(location.state?.userInput);

  // console.log(
  //   location.state?.hotelsList?.map((m) => {
  //     return m.name;
  //   })
  // );

  return (
    <div className="HotelDetails">
      <Container className="content">
        {/* <LocationApi /> */}

        <Row>
          <Card className="covid  text-white sm-12">
            Check COVID-19 restrictions
            <Card.Link
              href="https://boi.gov.in/content/advisory-travel-and-visa-restrictions-related-covid-19-1"
              className="text-white "
            >
              Find out more
            </Card.Link>
          </Card>
        </Row>
        <div className="content">
          <Row>
            {/* <div > */}
            <Col lg={3}>
              <Row
                className="sidebar"

                // style={{ margin: "5px", alignContent: "left" }}
              >
                {/* <Divider /> */}
                <b>Search by property name</b>
                <FloatingLabel
                  controlId="floatingSelectGrid"
                  label="Search"
                  className="xs-3"
                >
                  <Form.Select aria-label="Floating label select example"></Form.Select>
                </FloatingLabel>
                {/* <Divider /> */}
              </Row>

              <Row className="sidebar">
                <b>Filter by</b>
                <h6>Populer filters</h6>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Capsule Hotel"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Dinner included"
                />
                <FormControlLabel control={<Checkbox />} label="Hot tub" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="All-inclusive"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Free-airport shuttle"
                />
              </Row>

              <Row className="sidebar">
                <b>Your budget</b>

                <FormControlLabel
                  control={<Checkbox />}
                  label="Less than Rs2,000"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Rs2,000 to Rs4,000"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Rs4,000 to Rs8,000"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Rs8,000 to Rs11,000"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Greater than Rs11,000"
                />
              </Row>

              <Row className="sidebar">
                <b>Guest Rating</b>
                <FormControl>
                  {/* <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel> */}
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="any"
                    name="radio-buttons-group"
                    style={{ margin: "3px" }}
                  >
                    <FormControlLabel
                      value="any"
                      control={<Radio />}
                      label="Any"
                      style={{ margin: "3px" }}
                    />
                    <FormControlLabel
                      value="wonderful"
                      control={<Radio />}
                      label="Wonderful 4.5+"
                      style={{ margin: "3px" }}
                    />
                    <FormControlLabel
                      value="verygood"
                      control={<Radio />}
                      label="Very good 4+"
                      style={{ margin: "3px" }}
                    />
                    <FormControlLabel
                      value="good"
                      control={<Radio />}
                      label="Good 3.5+"
                      style={{ margin: "3px" }}
                    />
                  </RadioGroup>
                </FormControl>
              </Row>

              <Row className="sidebar">
                <b>Cleaning and safety practices</b>

                <FormControlLabel
                  control={<Checkbox />}
                  label="Enhanced cleaning."
                >
                  Properties taking additional steps to clean and sanities
                </FormControlLabel>
              </Row>

              <Row className="sidebar">
                <b>Payment type</b>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Fully refundable"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Reserve now, pay later"
                />
              </Row>

              <Row className="sidebar">
                <b>Property type</b>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Capsule hotel"
                />
                <FormControlLabel control={<Checkbox />} label="Apart-hotel" />
                <FormControlLabel control={<Checkbox />} label="Apartment" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Condominium resort"
                />
                <FormControlLabel control={<Checkbox />} label="Hotel" />
                <FormControlLabel control={<Checkbox />} label="Palace" />
                <FormControlLabel control={<Checkbox />} label="Condo" />
                <FormControlLabel control={<Checkbox />} label="Villa" />
              </Row>

              <Row className="sidebar">
                <b>Meal plans available</b>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Breakfast included"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Lunch included"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Dinner included"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="All-inclusive"
                />
              </Row>

              <Row className="sidebar">
                <b>Amenities</b>
                <FormControlLabel control={<Checkbox />} label="Hot tub" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Free airport shuttle"
                />
                <FormControlLabel control={<Checkbox />} label="Pet-friendly" />
                <FormControlLabel control={<Checkbox />} label="Spa" />
                <FormControlLabel control={<Checkbox />} label="Free-WiFi" />
                <FormControlLabel control={<Checkbox />} label="Pool" />
                <FormControlLabel control={<Checkbox />} label="Kitchen" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Air conditioned"
                />
                <FormControlLabel control={<Checkbox />} label="Casino" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Washwer and dryer"
                />
              </Row>

              <Row className="sidebar">
                <b>Expedia Rewards</b>
                <FormControlLabel
                  control={<Checkbox />}
                  label="VIP Access Properties"
                >
                  Top-rated stays with member perks
                </FormControlLabel>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Member only deals"
                >
                  Sign up to get instant savings
                </FormControlLabel>
              </Row>

              <Row className="sidebar">
                <b>Accessibility</b>
                <FormControlLabel control={<Checkbox />} label="Lift" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Accessible bathroom"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Roll-in shower"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="In-room accessibility"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Service animals allowed"
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Stair-free path to entrance"
                />
                <FormControlLabel control={<Checkbox />} label="Kitchen" />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Sign language-capable staff"
                />
              </Row>

              <Row className="sidebar">
                <b>Traveller Experience</b>
                <FormControlLabel
                  control={<Checkbox />}
                  label="LGBTQ welcoming"
                >
                  Top-rated stays with member perks
                </FormControlLabel>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Business-friendly"
                >
                  Sign up to get instant savings
                </FormControlLabel>
                <FormControlLabel
                  control={<Checkbox />}
                  label="Family-friendly"
                >
                  Sign up to get instant savings
                </FormControlLabel>
              </Row>
            </Col>
            {/* </div> */}

            <Col lg={9}>
              <div
                style={{
                  marginTop: "13px",
                  marginLeft: "13px",
                }}
              >
                Available hotels in <b>{location.state?.userInput}</b>
              </div>

              {location.state?.hotelsList?.map((h) => {
                return (
                  <HotelCards
                    hotelSuggestions={
                      <div>
                        <div className="hotelname">
                          <b>Name: </b>
                          {h.name}
                        </div>
                        <div className="roomprice">
                          <b>Price: </b>
                          {h.destinationId.slice(0, 3)}
                        </div>
                      </div>
                    }
                  />
                );
              })}
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}

export default HotelDetails;
