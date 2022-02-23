import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/include/navbar";
// import Footer from "./components/include/Footer";

import Home from "./components/pages/home";
import LocationFetch from "././components/pages/locationapi";
import Support from "./components/pages/support";
import SupportFooter from "./components/include/SupportFooter";
import SignIn from "./components/pages/SignIn";
import SignUp from "./components/pages/SignUpForm";
import HotelDetails from "./components/pages/HotelDetails";
import Hotel from "./components/pages/Hotel";
import About from "./components/pages/AboutUs";
import GetTheApp from "./components/include/GetTheApp";
//test
import GoingTo from "./components/pages/Dummy";
// import Test from "./components/pages/test";

import NoMatch from "./components/pages/NoMatch";

//redux
import { Provider } from "react-redux";
import store from "./components/redux/store";
import City from "./components/pages/GoingTo";
function App() {
  return (
    <>
      <Provider store={store}>
        <Navbar />

        <Routes>
          <Route path="GoingTo" element={<City />} />

          <Route path="/" element={<Home />} />
          <Route path="GetTheApp" element={<GetTheApp />} />
          <Route path="/support" element={<Support />} />
          <Route path="/SignIn" element={<SignIn />} />
          <Route path="/SignUpForm" element={<SignUp />} />
          <Route path="/locationapi" element={<LocationFetch />} />
          <Route path="/HotelDetails" element={<HotelDetails />} />
          <Route path="Hotel" element={<Hotel />} />
          <Route path="/AboutUs" element={<About />} />
          <Route path="/SupportFooter" element={<SupportFooter />} />
          <Route path="*" element={<NoMatch />} />
          {/* <Route path="/test" element={<Test />} /> */}
          <Route path="Dummy" element={<GoingTo />} />
        </Routes>

        {/* <Footer /> */}
        {/* <SupportFooter /> */}
      </Provider>
    </>
  );
}

export default App;
