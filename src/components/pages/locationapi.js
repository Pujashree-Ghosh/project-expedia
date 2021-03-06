import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Flight from "./FlightDetails";
import { useNavigate } from "react-router-dom";

function GoingTo() {
  const navigate = useNavigate();

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
  // console.log(selectedValue?.value);
  const GoingTo = destination?.value;
  console.log("destination: ", GoingTo);
  const GoingFrom = origin?.value;
  console.log("Origin: ", GoingFrom);
  return (
    <>
      <div>
        <Select
          defaultValue={origin}
          options={options}
          onChange={handleOrigin}
          isClearable={true}
          placeholder="Going From"
        ></Select>
      </div>
      <div>
        <Select
          defaultValue={destination}
          options={options}
          onChange={handleDestination}
          isClearable={true}
          placeholder="Going To"
        ></Select>
      </div>

      <div>
        <button
          onClick={() => {
            //   return console.log("hi", userInput)
            navigate("/FlightDetails", { state: { GoingTo, GoingFrom } });
          }}
        >
          Search Flight
        </button>
      </div>
    </>
  );
}
export default GoingTo;
