import React, { useState } from "react";
import "./GoingTo.css";
import TextField from "@mui/material/TextField";
import { Form, FloatingLabel, Button } from "react-bootstrap";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
function Return() {
  //going from

  const [from, setFrom] = useState("");

  const handleFrom = (event) => {
    setFrom(event.target.value);
  };

  //going to
  const [place, setPlace] = useState("");

  const handleChangePlace = (event) => {
    setPlace(event.target.value);
  };
  //Check-in
  const [checkInDate, setCheckInDate] = useState(null);

  // CheckOut
  const [checkOutDate, setCheckOutDate] = useState(null);
  return (
    <div>
      <div class="row returninput">
        <div class="col-3 GoingToSelect">
          <FloatingLabel controlId="floatingSelectGrid" label="Leaving From">
            <Form.Select
              className="returnSelect"
              aria-label="Floating label select example"
              value={from}
              onChange={handleFrom}
            >
              <option value=""></option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Pune">Pune</option>
            </Form.Select>
          </FloatingLabel>
        </div>
        <div class="col-3 GoingToSelect">
          <FloatingLabel controlId="floatingSelectGrid" label="Going To">
            <Form.Select
              className="returnSelect"
              aria-label="Floating label select example"
              value={place}
              onChange={handleChangePlace}
            >
              <option value=""></option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Pune">Pune</option>
            </Form.Select>
          </FloatingLabel>
        </div>
        <div class="col-3 dateselect">
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            className="checkIn"
          >
            <DatePicker
              format="dd/MM/yyyy"
              label="Departing"
              minDate={new Date()}
              value={checkInDate}
              onChange={(newDate) => {
                setCheckInDate(newDate);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div class="col-3 dateselect">
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label="Returning"
              dateFormat="DD/MM/YYYY"
              minDate={new Date()}
              value={checkOutDate}
              onChange={(newDate) => {
                setCheckOutDate(newDate);
              }}
              style={{ padding: "10px", margin: "5px" }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div class="row">
        <div className="searchbutton">
          <Button
          // onClick={() => {
          //     return console.log("hi", userInput)
          //   navigate("/FlightDetails", {
          //     state: { GoingTo, GoingFrom, Departing },
          //   });
          // }}
          >
            Search Flight
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Return;
