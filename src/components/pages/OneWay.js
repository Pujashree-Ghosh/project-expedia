import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";

import { useNavigate } from "react-router-dom";
import "./OneWay.css";
import { Button } from "react-bootstrap";
function OneWay() {
  const navigate = useNavigate();
  const [departureDate, setDepartureDate] = useState(null);

  const [city, setCity] = useState();
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);
  const handleOrigin = (value) => {
    console.log(value);
    setOrigin(value);
  };
  const handleDestination = (value) => {
    console.log(value);
    setDestination(value);
  };

  useEffect(() => {
    //console.log("fetchCode");
    axios
      .post("https://countriesnow.space/api/v0.1/countries/cities", {
        country: "india",
      })
      .then((resp) => {
        console.log(resp);
        const cityList = resp.data.data;
        console.log(cityList);
        setCity(cityList);
      });
  }, []);
  const options = [];

  city?.map((value) => {
    // console.log(value);

    options.push({
      label: `${value}`,
      value: `${value}`,
    });
  });

  //inputs from the user

  // console.log(selectedValue?.value);
  const GoingTo = destination?.value;
  //   console.log("destination: ", GoingTo);

  const GoingFrom = origin?.value;
  //   console.log("Origin: ", GoingFrom);

  //   console.log("Departing on:", departureDate);
  const Departing = departureDate;

  return (
    <>
      <div class="row oneWayinput">
        <div class="col-6">
          <Select
            className="locationSelect"
            defaultValue={origin}
            options={options}
            onChange={handleOrigin}
            isClearable={true}
            placeholder="Going From"
          ></Select>
        </div>
        <div class="col-6">
          <Select
            className="locationSelect"
            defaultValue={destination}
            options={options}
            onChange={handleDestination}
            isClearable={true}
            placeholder="Going To"
          ></Select>
        </div>
        {/* <div>
        <LocalizationProvider dateAdapter={AdapterDateFns} className="checkIn">
          <DatePicker
            label="Departing"
            minDate={new Date()}
            value={departureDate}
            onChange={(newDate) => {
              setDepartureDate(newDate);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </LocalizationProvider>
      </div> */}
      </div>
      <div class="row">
        <div className="searchflight">
          <Button
            onClick={() => {
              //   return console.log("hi", userInput)
              navigate("/FlightDetails", {
                state: { GoingTo, GoingFrom, Departing },
              });
            }}
          >
            Search Flight
          </Button>
        </div>
      </div>
    </>
  );
}
export default OneWay;
