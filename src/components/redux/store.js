import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import locationReducer from "./Location/locationReducer";
const store = createStore(locationReducer, applyMiddleware(thunk));
export default store;
