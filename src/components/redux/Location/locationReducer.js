import {
  FETCH_CITY_FAILURE,
  FETCH_CITY_REQUEST,
  FETCH_CITY_SUCCESS,
} from "./locationTypes";

const initialState = {
  loading: false,
  cityList: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CITY_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_CITY_SUCCESS:
      return {
        loading: false,
        cityList: action.payload,
        error: "",
      };
    case FETCH_CITY_FAILURE:
      return {
        loading: false,
        cityList: [],
        error: action.payload,
      };
    default:
      return state;
  }
};
export default reducer;
