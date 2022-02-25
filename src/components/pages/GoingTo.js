import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCity } from "../redux/Location/locationActions";
import Select from "react-select";
import "./GoingTo.css";
// import "./searchbutton.css";
import TextField from "@mui/material/TextField";

import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";
import { useNavigate } from "react-router-dom";

import { Form, Row, Col, FloatingLabel, Button } from "react-bootstrap";

function GoingTo({ cityData }) {
  const cityNames = useSelector((state) => state.cityList);
  //   console.log("Going to:", cityNames);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchCity());
  }, []);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value) => {
    setSelectedValue(value);
  };
  const options = [];
  //Check-in
  const [checkInDate, setCheckInDate] = useState(null);

  // CheckOut
  const [checkOutDate, setCheckOutDate] = useState(null);
  cityNames?.map((value) => {
    // console.log(value);

    options.push({
      label: `${value}`,
      value: `${value}`,
    });
  });
  const userInput = selectedValue?.value;

  return (
    <>
      <div>
        <Select
          className="GoingToSelect"
          defaultValue={selectedValue}
          options={options}
          onChange={handleChange}
          isClearable={true}
          placeholder="Going To"
        ></Select>
      </div>
      <div>
        <Col>
          <Form.Group>
            {/* <LocalizationProvider
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
            </LocalizationProvider> */}
          </Form.Group>
        </Col>
        <Col>
          {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
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
          </LocalizationProvider> */}
        </Col>
      </div>
      {/* <div>
        <HotelApi goingTo={userInput} />
      </div> */}
      <div>
        <Button
          className="searchbutton"
          onClick={() => {
            //   return console.log("hi", userInput)
            navigate("/HotelDetails", { state: { userInput } });
          }}
        >
          Search Hotel
        </Button>
      </div>
      {/* <div>
        {cityData &&
          cityData.cityList &&
          cityData.cityList.map((c) => {
            console.log("c:", c);
          })}
      </div> */}
    </>
  );
}

// const mapStateToProps = (state) => {
//   return {
//     cityData: state.cityList,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     fetchCity: () => dispatch(fetchCity()),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(GoingTo);
export default GoingTo;
