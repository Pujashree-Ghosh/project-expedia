import React, { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import HotelApi from "./hotelapi";
function GoingTo() {
  const [city, setCity] = useState();
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value) => {
    setSelectedValue(value);
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
  const userInput = selectedValue?.value;
  // console.log("userinput: ", userInput);

  return (
    <>
      <div className="conatainer">
        <div className="row">
          <div className="col-md-4">
            <Select
              defaultValue={selectedValue}
              options={options}
              onChange={handleChange}
              isClearable={true}
              placeholder="Going To"
            ></Select>
          </div>
        </div>
      </div>
      <div>
        <HotelApi goingTo={userInput} />
      </div>
    </>
  );
}
export default GoingTo;
