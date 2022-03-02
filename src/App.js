import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

// import Navbar from "./components/include/navbar";
import MyNavbar from "./components/include/navbar";

// import Footer from "./components/include/Footer";
// import FooterLinks from "./components/include/FooterLinks";

import Home from "./components/pages/home";
import LocationFetch from "././components/pages/locationapi";
import Support from "./components/pages/support";

import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUpForm";
import HotelDetails from "./components/pages/HotelDetails";
import Hotel from "./components/pages/Hotel";
import About from "./components/pages/AboutUs";
import GetTheApp from "./components/include/GetTheApp";
import Tab from "./components/pages/Tab";
//test
import GoingTo from "./components/pages/Dummy";
// import Test from "./components/pages/test";

import NoMatch from "./components/pages/NoMatch";
import Flight from "./components/pages/FlightDetails";
//redux
import { Provider } from "react-redux";
import store from "./components/redux/store";
import City from "./components/pages/GoingTo";
import Trips from "./components/pages/Trips";
import Itinerary from "./components/pages/Itinerary";
function App() {
  return (
    <>
      <Provider store={store}>
        {/* <Navbar /> */}
        <MyNavbar />
        <Routes>
          <Route path="GoingTo" element={<City />} />
          <Route path="Tab" element={<Tab />} />

          <Route path="/" element={<Home />} />
          <Route path="GetTheApp" element={<GetTheApp />} />
          <Route path="/support" element={<Support />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUpForm" element={<SignUp />} />
          <Route path="/locationapi" element={<LocationFetch />} />
          <Route path="/HotelDetails" element={<HotelDetails />} />
          <Route path="Hotel" element={<Hotel />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/Trips" element={<Trips />} />
          <Route path="/Itinerary" element={<Itinerary />} />

          <Route path="*" element={<NoMatch />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="Dummy" element={<GoingTo />} />
          <Route path="FlightDetails" element={<Flight />} />
        </Routes>
      </Provider>
    </>
  );
}

export default App;
