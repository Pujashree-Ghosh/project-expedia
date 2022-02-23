import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCity } from "../redux/Location/locationActions";
import Select from "react-select";
import HotelApi from "./hotelapi";

function GoingTo({ cityData }) {
  const cityNames = useSelector((state) => state.cityList);
  //   console.log("Going to:", cityNames);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCity());
  }, []);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value) => {
    setSelectedValue(value);
  };
  const options = [];

  cityNames?.map((value) => {
    // console.log(value);

    options.push({
      label: `${value}`,
      value: `${value}`,
    });
  });
  const userInput = selectedValue?.value;

  return cityData?.loading ? (
    <h2>Loading</h2>
  ) : cityData?.error ? (
    <h2>userData.error</h2>
  ) : (
    <>
      <h2>City List</h2>
      {/* <div>
        {cityNames &&
          cityNames.map((c) => {
            // console.log("c:", c);
            return c;
          })}
      </div> */}
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
