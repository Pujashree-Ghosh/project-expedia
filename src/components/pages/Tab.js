import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
import GoingTo from "./GoingTo";
import OneWay from "./OneWay";
import Returrn from "./Return";
import "./Tab.css";
// import Hotel from "./Hotel";

// import { Button } from "react-bootstrap";

import { Tabs, Tab, Typography, Checkbox } from "@material-ui/core";
import TextField from "@mui/material/TextField";
// import FormControl from "@mui/material/FormControl";
// import MenuItem from "@mui/material/MenuItem";
// import InputLabel from "@mui/material/InputLabel";
// import Select from "@mui/material/Select";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
// import Button from "@mui/material/Button";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import TimePicker from "@mui/lab/TimePicker";
import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";
// import AsyncSelect from "react-select/async";
// import PlacesAutocomplete from "react-places-autocomplete";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// import { Nav, NavDropdown } from "react-bootstrap";

// for toggeling between the tabs
const Panel = (props) => (
  <div hidden={props.value !== props.index}>
    <Typography>{props.children}</Typography>
  </div>
);

function Test() {
  //tab toggeling
  const [index, setIndex] = useState(0);
  const onTabClick = (event, index) => {
    setIndex(index);
  };

  //panel 1

  //going to
  const [place, setPlace] = useState("");

  const handleChangePlace = (event) => {
    setPlace(event.target.value);
  };

  //Check-in
  const [checkInDate, setCheckInDate] = useState(null);

  // CheckOut
  const [checkOutDate, setCheckOutDate] = useState(null);

  //checkbox-flight
  // const [flightChecked, setFlightChecked] = useState(false);

  //going from

  const [from, setFrom] = useState("");

  const handleFrom = (event) => {
    setFrom(event.target.value);
  };

  //panel 2 return

  const [returrn, setReturrn] = useState(false);

  //panel 2 one-way
  const [oneWay, setOneWay] = useState(false);
  //panel 2 multi-city
  const [multiCity, setMultiCity] = useState(false);

  // const [city, setCity] = useState([{}])

  // const handleCity = (event) => {
  //   setCity(city,)
  // }

  //pick-up time & drop-off
  const [pickUp, setPickUp] = useState(null);
  const [dropOff, setDropOff] = useState(null);

  //panel 3 cars
  //rental cars
  const [rentalCars, setRentalCars] = useState(false);

  //airport transport
  const [airport, setAirport] = useState(false);

  //checkbox-book return
  const [bookReturn, setBookReturn] = useState(false);

  // Flight Arrival/Deperture time

  const [flightArrivalTime, setFlightArrivalTime] = useState(null);
  const [flightDepartureTime, setFlightDepartureTime] = useState(null);

  //panel 4 packages

  //checkbox-accomodation
  const [accommodation, setAccommodation] = useState(false);
  //Hotel Name
  const [hotel, setHotel] = useState("");

  const handleChangeHotel = (event) => {
    setHotel(event.target.value);
  };

  //Check-in Hotel
  const [checkInHotel, setCheckInHotel] = useState(null);

  // CheckOut Hotel
  const [checkOutHotel, setCheckOutHotel] = useState(null);

  // const onSubmit = (data) => console.log(data);

  //Travellers
  // const [travellers, setTravellers] = useState(false);
  // Adult Traveller
  // const [adult, setAdult] = useState(1);
  // const addAdult = () => {
  //   setAdult(adult + 1);
  // };
  // const subtractAdult = () => {
  //   if (adult > 1) setAdult(adult - 1);
  //   else {
  //     alert("Minimum Limit Raeched!");
  //     setAdult(1);
  //   }
  // };
  // Child Travller
  // const [child, setChild] = useState(0);
  // const addChild = () => {
  //   setChild(child + 1);
  // };
  // const subtractChild = () => {
  //   if (child > 0) setChild(child - 1);
  //   else {
  //     alert("Minimum Limit Raeched!");
  //     setChild(0);
  //   }
  // };

  //child age

  // const [childAge, setChildAge] = useState("");

  // const handleChildAge = (event) => {
  //   setChildAge(event.target.value);
  //   console.log(childAge);
  // };

  //add multicity

  const [flightList, setFlightList] = useState([
    { from: "", place: "", checkin: null },
  ]);
  // handle input change
  const handleInputChange = (e, index) => {
    console.log(e);
    const { name, value } = e.target;
    const list = [...flightList];
    list[index][name] = value;
    setFlightList(list);
    console.log(value);
  };
  // const setCheckIn;
  //   const setCheckInDate = (e, index) => {

  //     setFlightList(newDate);
  //   };

  //  Add Flight
  const handleAddFlight = () => {
    setFlightList([...flightList, { from: "", place: "", checkin: null }]);
  };
  //  Remove Flight
  const handleRemoveFlight = (index) => {
    const list = [...flightList];
    list.splice(index, 1);
    setFlightList(list);
  };
  // const handleStaysSearch = () => {
  //   alert("Searching...");
  // };

  return (
    <>
      <div className="tabContainer">
        {/* <div
          class="row justify-content-center"
          style={{
            // backgroundColor: "rgb(241, 241, 253)",
            marginTop: "0px",
            marginRight: "0px",
            marginLeft: "0px",
            margin: "0px",
          }}
        >
          <div class="col-10 "> */}
        <div className="tab">
          {/* <Row> */}
          <Tabs centered value={index} onChange={onTabClick}>
            <Tab label="Stays" />
            <Tab label="Flights" />
            <Tab label="Cars" />
            <Tab label="Packages" />
            {/* <Tab label="Things To Do" /> */}
          </Tabs>
          {/* </Row> */}
          <div class="panel">
            {/* ------------Stays----------------- */}
            <Panel value={index} index={0}>
              {/* Going To  */}
              <div className="StaysPanel">
                <Form>
                  <Row>
                    <Col>
                      <Form.Group>
                        <Col>
                          <GoingTo />
                        </Col>
                        {/* <div className="LocationApi">
                          <div className="userinput">
                            <form>
                              <div>
                                <input
                                  type="text"
                                  placeholder="Going To"
                                  onChange={onChange}
                                  value={userInput}
                                />
                                {suggestionsListComponent}
                              </div>
                            </form>
                          </div>
                        </div> */}
                        {/* <FloatingLabel
                          controlId="floatingSelectGrid"
                          label="Going To"
                        >
                          <Form.Select
                            required
                            aria-label="Floating label select example"
                            value={place}
                            onChange={handleChangePlace}
                          >
                            <option value=""></option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Pune">Pune</option>
                          </Form.Select>
                        </FloatingLabel> */}
                        {/* <LocationAPI /> */}
                      </Form.Group>
                    </Col>

                    {/* <Col>
                      <Form.Group>
                        <LocalizationProvider
                          dateAdapter={AdapterDateFns}
                          className="checkIn"
                        >
                          <DatePicker
                            format="dd/MM/yyyy"
                            label="Check-In"
                            minDate={new Date()}
                            value={checkInDate}
                            onChange={(newDate) => {
                              setCheckInDate(newDate);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </Form.Group>
                    </Col>
                    <Col>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Check-out"
                          dateFormat="DD/MM/YYYY"
                          minDate={checkInDate}
                          value={checkOutDate}
                          onChange={(newDate) => {
                            setCheckOutDate(newDate);
                          }}
                          style={{ padding: "15px", margin: "5px" }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </Col> */}
                    {/* <Col>
                        <Button
                          className="travellers"
                          variant="outlined"
                          style={{ padding: "10px", margin: "5px" }}
                          value="travellers"
                          onClick={() => {
                            setTravellers(!travellers);
                          }}
                          required
                        >
                          {adult + child} Traveller
                          {adult + child > 1 && <span>s</span>}
                        </Button>
                      </Col> */}
                    {/* {travellers && (
                        <div class="Travellers">
                          <Form>
                            <Row>
                              <div>Travellers</div>
                            </Row>
                            <Row>
                              <div>Room 1</div>
                            </Row>
                            <Row>
                              <Col>Adults</Col>
                              <Col>
                                <div className="PlusMinus">
                                  <Button onClick={subtractAdult}>-</Button>
                                </div>
                              </Col>
                              <Col>{adult}</Col>
                              <Col>
                                <div className="PlusMinus">
                                  <Button onClick={addAdult}>+</Button>
                                </div>
                              </Col>
                            </Row>
                            <Row>
                              <Col>Childern(Ages 0-17)</Col>
                              <Col>
                                <div className="PlusMinus">
                                  <Button onClick={subtractChild}>-</Button>
                                </div>
                              </Col>
                              <Col>{child}</Col>
                              <Col>
                                <div className="PlusMinus">
                                  <Button onClick={addChild}>+</Button>
                                  {child && (
                                <div class="childAge">
                                  <FloatingLabel
                                    controlId="floatingSelectGrid"
                                    label="Child age"
                                  >
                                    <Form.Select
                                      aria-label="Floating label select example"
                                      value={childAge}
                                      onChange={handleChildAge}
                                    >
                                      <option value="0">0</option>
                                      <option value="1">1</option>
                                      <option value="2">2</option>
                                    </Form.Select>
                                  </FloatingLabel>
                                </div>
                              )}
                                </div>
                              </Col>
                            </Row>
                          </Form>
                        </div>
                      )} */}
                  </Row>

                  {/* <Row>
                    <FormGroup aria-label="position" row>
                      <Col>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Add a flight"
                          onClick={() => setFlightChecked(!flightChecked)}
                        />
                        {flightChecked && (
                          <div className="content">
                            <FloatingLabel
                              controlId="floatingSelectGrid"
                              label="Leaving From"
                            >
                              <Form.Select
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
                        )}
                      </Col>
                      <Col>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Add a car"
                        />
                      </Col>
                    </FormGroup>
                  </Row> */}
                  {/* <Row>
                    <div className="hotelsearch">
                      <Button
                        type="button"
                        variant="contained"
                        onClick={fetchHotel}
                      >
                        Search Hotels
                      </Button>
                    </div>
                  </Row> */}
                  {/* <Row>
                    <Button
                      className="FlightButton"
                      variant="contained"
                      type="submit"
                      style={{
                        width: "50px",
                        fontSize: "10px",
                        alignItems: "center",
                      }}
                      onClick={handleStaysSearch}
                    >
                      Search
                    </Button>
                  </Row> */}
                </Form>
              </div>
            </Panel>
            {/* ------------Flight----------------- */}
            <Panel value={index} index={1}>
              {/* Return */}

              <Form>
                <Row>
                  {/* <Col> */}
                  <div className="collapsible">
                    <Col>
                      <Button
                        variant="light"
                        style={{
                          padding: "10px",
                          margin: "5px",
                          width: "150px",
                          border: "none",
                          // color: "red",
                        }}
                        value="OneWay"
                        onClick={() => {
                          setReturrn(false);
                          setOneWay(!oneWay);
                          setMultiCity(false);
                        }}
                      >
                        One-Way
                      </Button>
                      {/* </Col>
                            <Col> */}
                      <Button
                        className="toggle"
                        variant="light"
                        style={{
                          padding: "10px",
                          margin: "5px",
                          width: "150px",
                        }}
                        value="Return"
                        onClick={() => {
                          setReturrn(!returrn);
                          setOneWay(false);
                          setMultiCity(false);
                        }}
                      >
                        Return
                      </Button>
                      {/* </Col>
                        <Col> */}
                      <Button
                        variant="light"
                        style={{
                          padding: "10px",
                          margin: "5px",
                          width: "150px",
                        }}
                        value="MultiCity"
                        onClick={() => {
                          setReturrn(false);
                          setOneWay(false);
                          setMultiCity(!multiCity);
                        }}
                      >
                        Multi-city
                      </Button>
                    </Col>

                    {/* <Col>
                          <Form.Select
                            class="FlightClass"
                            aria-label="Default select example"
                            style={{
                              align: "right",
                              width: "auto",
                              border: "none",
                            }}
                          >
                            <option value="Economy">Economy</option>
                            <option value="Premium Class">Premium Class</option>
                            <option value="Business Class">
                              Business Class
                            </option>
                            <option value="First Class">First Class</option>
                          </Form.Select>
                        </Col> */}
                  </div>
                </Row>
                {/* return */}
                {returrn && <Returrn />}

                {/* <div className="ReturnContent"> */}
                {/* <FloatingLabel
                          controlId="floatingSelectGrid"
                          label="Leaving From"
                        >
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

                        <FloatingLabel
                          controlId="floatingSelectGrid"
                          label="Going To"
                        >
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
                        </LocalizationProvider> */}

                {/* </div> */}
                {/* One-way */}
                {oneWay && (
                  // <div className="OnewayContent">
                  <OneWay />
                  // </div>
                )}
                {/* Multi-City */}
                {multiCity &&
                  flightList.map((x, i) => {
                    return (
                      <>
                        {/* <div className="MulticityContent"> */}
                        <div class="row" style={{ margin: "8px" }}>
                          Flight {i + 1}
                        </div>
                        <div class="row">
                          <div class="col-4">
                            <FloatingLabel
                              controlId="floatingSelectGrid"
                              label="Leaving From"
                            >
                              <Form.Select
                                className="TabSelect"
                                name="from"
                                placeholder="Leaving From"
                                aria-label="Floating label select example"
                                value={x.from}
                                onChange={(e) => handleInputChange(e, i)}
                              >
                                <option value=""></option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Pune">Pune</option>
                              </Form.Select>
                            </FloatingLabel>
                          </div>
                          <div class="col-4">
                            <FloatingLabel
                              controlId="floatingSelectGrid"
                              label="Going To"
                            >
                              <Form.Select
                                className="TabSelect"
                                name="place"
                                placeholder="Going To"
                                aria-label="Floating label select example"
                                value={x.place}
                                onChange={(e) => handleInputChange(e, i)}
                              >
                                <option value=""></option>
                                <option value="Mumbai">Mumbai</option>
                                <option value="Delhi">Delhi</option>
                                <option value="Pune">Pune</option>
                              </Form.Select>
                            </FloatingLabel>
                          </div>
                          <div class="col-4 datetime">
                            <LocalizationProvider
                              dateAdapter={AdapterDateFns}
                              className="checkIn"
                            >
                              <DatePicker
                                name="checkin"
                                format="dd/MM/yyyy"
                                label="Departing"
                                minDate={new Date()}
                                value={x.checkin}
                                onChange={(e) => handleInputChange(e, i)}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                          </div>
                          {/* </div> */}
                        </div>
                        <div class="row">
                          <div className="multicitysearch">
                            {flightList.length - 1 === i && (
                              <Button
                                className="multicityButton"
                                onClick={handleAddFlight}
                              >
                                Add another flight
                              </Button>
                            )}
                            {flightList.length !== 1 && (
                              <Button
                                className="multicityButton"
                                onClick={() => handleRemoveFlight(i)}
                              >
                                Remove
                              </Button>
                            )}
                          </div>
                        </div>
                      </>
                    );
                  })}
              </Form>
            </Panel>
            {/* ------------Cars----------------- */}
            <Panel value={index} index={2}>
              {/* Rental Cars */}
              <Form>
                <Row>
                  <div className="collapsible">
                    <Col>
                      <Button
                        className="toggle"
                        variant="light"
                        style={{ padding: "10px", margin: "5px" }}
                        value="Rental Cars"
                        onClick={() => {
                          setRentalCars(!rentalCars);
                          setAirport(false);
                        }}
                      >
                        Rental Cars
                      </Button>

                      <Button
                        variant="light"
                        style={{ padding: "10px", margin: "5px" }}
                        value="Airport"
                        onClick={() => {
                          setAirport(!airport);
                          setRentalCars(false);
                        }}
                      >
                        Airport transport
                      </Button>
                    </Col>
                  </div>
                </Row>

                {rentalCars && (
                  <div className="content">
                    <div class="row">
                      <div class="col-3">
                        <FloatingLabel
                          controlId="floatingSelectGrid"
                          label="Pick-Up"
                        >
                          <Form.Select
                            className="TabSelect"
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
                      <div class="col-3">
                        <FloatingLabel
                          controlId="floatingSelectGrid"
                          label="Drop-Off"
                        >
                          <Form.Select
                            className="TabSelect"
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
                      {/* </div> */}
                      {/* <div class="row"> */}
                      <div class="col-3 datetime">
                        <LocalizationProvider
                          dateAdapter={AdapterDateFns}
                          className="checkIn"
                        >
                          <DatePicker
                            format="dd/MM/yyyy"
                            label="Pick-up-date"
                            minDate={new Date()}
                            value={checkInDate}
                            onChange={(newDate) => {
                              setCheckInDate(newDate);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </div>
                      <div class="col-3 datetime">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            label="Drop-off-date"
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
                      {/* </div> */}
                      {/* <div class="row"> */}
                      <div class="col-3 datetime">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <TimePicker
                            label="Pick-up time"
                            value={pickUp}
                            onChange={(newValue) => {
                              setPickUp(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </div>
                      <div class="col-3 datetime">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <TimePicker
                            label="Drop-off-time"
                            value={dropOff}
                            onChange={(newValue) => {
                              setDropOff(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </div>
                    </div>
                  </div>
                )}
                {/* Airport Transport */}

                {airport && (
                  <div className="content">
                    <div class="row">
                      <div class="col-3">
                        <FloatingLabel
                          controlId="floatingSelectGrid"
                          label="Airport"
                        >
                          <Form.Select
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
                      <div class="col-3">
                        <FloatingLabel
                          controlId="floatingSelectGrid"
                          label="Hotel Name"
                        >
                          <Form.Select
                            aria-label="Floating label select example"
                            value={hotel}
                            onChange={handleChangeHotel}
                          >
                            <option value=""></option>
                            <option value="Mumbai"> Taaj</option>
                            <option value="Delhi">JW Marriot</option>
                            <option value="Pune">Westin</option>
                          </Form.Select>
                        </FloatingLabel>
                      </div>
                      <div class="col-3 datetime">
                        <LocalizationProvider
                          dateAdapter={AdapterDateFns}
                          className="checkIn"
                        >
                          <DatePicker
                            format="dd/MM/yyyy"
                            label="Flight arrival date"
                            minDate={new Date()}
                            value={checkInDate}
                            onChange={(newDate) => {
                              setCheckInDate(newDate);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </div>
                      <div class="col-3 datetime">
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <TimePicker
                            label="Flight arrival time"
                            value={flightArrivalTime}
                            onChange={(newValue) => {
                              setFlightArrivalTime(newValue);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </LocalizationProvider>
                      </div>
                    </div>
                    <div>
                      <FormGroup aria-label="position" row>
                        <FormControlLabel
                          control={<Checkbox />}
                          label="Book return"
                          onClick={() => setBookReturn(!bookReturn)}
                        />
                        {bookReturn && (
                          <div className="content">
                            <LocalizationProvider
                              dateAdapter={AdapterDateFns}
                              className="departureDate"
                            >
                              <DatePicker
                                format="dd/MM/yyyy"
                                label="Flight departure Date"
                                minDate={new Date()}
                                value={checkOutDate}
                                onChange={(newDate) => {
                                  setCheckOutDate(newDate);
                                }}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                              <TimePicker
                                label="Flight departure time"
                                value={flightDepartureTime}
                                onChange={(newValue) => {
                                  setFlightDepartureTime(newValue);
                                }}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                            </LocalizationProvider>
                          </div>
                        )}
                      </FormGroup>
                    </div>
                  </div>
                )}
              </Form>
            </Panel>
            {/* ------------Packages----------------- */}
            <Panel value={index} index={3}>
              <div class="row">
                <div class="col-4">
                  <FloatingLabel
                    controlId="floatingSelectGrid"
                    label="Going To"
                  >
                    <Form.Select
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
                <div class="col-4 datetime">
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
                <div class="col-4 datetime">
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
              <div>
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    control={<Checkbox />}
                    label="I only need accommodation for part of my trip"
                    onClick={() => setAccommodation(!accommodation)}
                  />
                  {accommodation && (
                    <div className="content">
                      <LocalizationProvider
                        dateAdapter={AdapterDateFns}
                        className="checkInHotel"
                      >
                        <DatePicker
                          format="dd/MM/yyyy"
                          label="Check-in"
                          minDate={new Date()}
                          value={checkInHotel}
                          onChange={(newDate) => {
                            setCheckInHotel(newDate);
                          }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                      <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                          label="Check-out"
                          dateFormat="DD/MM/YYYY"
                          minDate={new Date()}
                          value={checkOutHotel}
                          onChange={(newDate) => {
                            setCheckOutHotel(newDate);
                          }}
                          style={{ padding: "10px", margin: "5px" }}
                          renderInput={(params) => <TextField {...params} />}
                        />
                      </LocalizationProvider>
                    </div>
                  )}
                </FormGroup>
              </div>
            </Panel>
            {/* ------------Things To Do----------------- */}
            <Panel value={index} index={4}>
              <FloatingLabel
                controlId="floatingSelectGrid"
                label="Things To Do In"
              >
                <Form.Select
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

              <LocalizationProvider
                dateAdapter={AdapterDateFns}
                className="checkIn"
              >
                <DatePicker
                  format="dd/MM/yyyy"
                  label="From"
                  minDate={new Date()}
                  value={checkInDate}
                  onChange={(newDate) => {
                    setCheckInDate(newDate);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="To"
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
            </Panel>
          </div>
        </div>
        {/* </div>
        </div> */}
      </div>
    </>
  );
}

export default Test;
