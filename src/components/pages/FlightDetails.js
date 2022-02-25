import React, { useState, useEffect } from "react";
import Data from "./flightdetails.json";
import "./flightdetails.css";
import FlightCards from "./FlightCard";
import { useLocation } from "react-router-dom";
import { Card, Row } from "react-bootstrap";
import { Checkbox } from "@material-ui/core";
import FormControlLabel from "@mui/material/FormControlLabel";

function FlightDetails() {
  const location = useLocation();
  // console.log("FD", location.state);

  // console.log("FD GF", location.state?.GoingFrom);
  const userGoingFrom = location.state?.GoingFrom;
  console.log("Origin:", userGoingFrom);

  // console.log("FD GT", location.state?.GoingTo);
  const userGoingTo = location.state?.GoingTo;
  console.log("Destination:", userGoingTo);

  // const DepartingOn = location.state?.Departing;
  // console.log(3, DepartingOn);

  const [flightData, setFlightData] = useState([]);

  // const userInput = props.goingTo;
  // console.log("userInput:", userInput);
  // const destination = Data.map((d) => d.destination);
  // console.log("destination:", destination);

  useEffect(() => {
    console.log("useEffect");
    console.log(
      Data.filter(
        (f) => f.destination === userGoingTo && f.origin === userGoingFrom
      )
    );
    const flightList = Data.filter(
      (f) => f.destination === userGoingTo && f.origin === userGoingFrom
    );
    console.log("F:", flightList);
    setFlightData(flightList);
  }, []);
  return (
    <div className="FlightDetails">
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
            <Card className="flightcovid  text-white">
              Check COVID-19 restrictions
              <Card.Link
                href="https://boi.gov.in/content/advisory-travel-and-visa-restrictions-related-covid-19-1"
                className="text-white "
              >
                Find out more
              </Card.Link>
            </Card>
          </div>
          <div class="col-3 flightmenu" style={{ padding: "0px" }}>
            <div style={{ fontSize: "20px" }}>Filters By</div>
            <Row>
              <b>Stops</b>
              <FormControlLabel control={<Checkbox />} label="Direct (11)" />
              <FormControlLabel control={<Checkbox />} label="1 Stop (76)" />
            </Row>
            <Row>
              <b>Airlines</b>
              <FormControlLabel control={<Checkbox />} label="Indigo (24)" />
              <FormControlLabel control={<Checkbox />} label="Vistara (24)" />
              <FormControlLabel control={<Checkbox />} label="Go First (19)" />
              <FormControlLabel control={<Checkbox />} label="SpiceJet (10)" />
            </Row>
            <Row>
              <b>Travel and baggage</b>

              <FormControlLabel
                control={<Checkbox />}
                label="Seat choice included"
              />
              <FormControlLabel
                control={<Checkbox />}
                label="Hand baggage included"
              />
            </Row>
          </div>

          <div
            class="col-9"
            style={{
              margin: "0px",
              padding: "0px",
              // width: "950px",
              // backgroundColor: "green",
            }}
          >
            Choose departing flight from <b>{userGoingFrom} </b> to{" "}
            <b>{userGoingTo}</b>
            <hr></hr>
            <p style={{ fontSize: "13px" }}>
              Prices displayed may include taxes and may change based on
              availability. You can review any additional fees before checkout.
              Prices are not final until you complete your purchase.
            </p>
            {flightData?.map((f) => {
              return (
                <FlightCards
                  flightSuggestions={
                    <div>
                      <div>
                        <b>Name: </b>
                        {f.name}
                      </div>
                      <div>
                        <b>Airline Code:</b>
                        {f.code}
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
  );
}

export default FlightDetails;
