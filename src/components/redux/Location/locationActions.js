import axios from "axios";
import {
  FETCH_CITY_REQUEST,
  FETCH_CITY_SUCCESS,
  FETCH_CITY_FAILURE,
} from "./locationTypes";

export const fetchCityRequest = () => {
  return {
    type: FETCH_CITY_REQUEST,
  };
};

export const fetchCitySuccess = (city) => {
  return {
    type: FETCH_CITY_SUCCESS,
    payload: city,
  };
};
export const fetchCityFailure = (error) => {
  return {
    type: FETCH_CITY_FAILURE,
    payload: error,
  };
};

export const fetchCity = () => {
  return (dispatch) => {
    dispatch(fetchCityRequest);

    axios
      .post("https://countriesnow.space/api/v0.1/countries/cities", {
        country: "india",
      })
      .then((resp) => {
        // console.log(resp);
        const cityNames = resp.data.data;
        // console.log("city list: ", cityNames);
        // setCity(cityList);
        dispatch(fetchCitySuccess(cityNames));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCityFailure(errorMsg));
      });
  };
};
