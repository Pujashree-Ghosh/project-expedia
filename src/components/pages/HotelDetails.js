import React, { useState, useEffect } from "react";
import "./HotelDetails.css";
import HotelCards from "./HotelCards";
import LocationApi from "./locationapi";
// import Hotel from "../images/Hotel.jpg";
import axios from "axios";
import { Link } from "react-router-dom";

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
  const [hotelData, setHotelData] = useState([]);

  console.log(location.state?.userInput);

  useEffect(() => {
    const userInput = location.state?.userInput;
    var options = {
      method: "GET",
      url: "https://hotels4.p.rapidapi.com/locations/v2/search",
      params: { query: userInput },

      headers: {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "83296d5a16msh0a890dc8dfd732ap16d478jsnebd2ed4b3682",
      },
    };
    axios

      .request(options)

      .then((response) => {
        // console.log(response);
        const hotelsList = response.data.suggestions
          .filter((s) => s.group === "HOTEL_GROUP")[0]
          .entities.map((h) => h);
        console.log(hotelsList);
        setHotelData(hotelsList);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="HotelDetails">
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
            <div class="CovidCard">
              {/* <h1>Chania</h1> */}
              <Card className="covid  text-white">
                Check COVID-19 restrictions
                <Card.Link
                  href="https://boi.gov.in/content/advisory-travel-and-visa-restrictions-related-covid-19-1"
                  className="text-white "
                >
                  Find out more
                </Card.Link>
              </Card>
            </div>
            <div class="col-3 sidemenu">
              {/* <Col lg={3}> */}
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
              {/* </Col> */}
            </div>

            <div class="col-9 CardContent">
              Available hotels in{" "}
              <b style={{ fontSize: "20px", color: "gray" }}>
                {location.state?.userInput}
              </b>
              {hotelData?.map((h) => {
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
        <div>{/* <SupportFooter /> */}</div>
      </div>
    </>
  );
}

export default HotelDetails;
