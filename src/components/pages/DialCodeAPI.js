// import "./styles.css";
// import HotelDetails from "./HotelDetails";
import React, { useState } from "react";
import axios from "axios";
// import { Button } from "react-bootstrap";
// import "./hotelapi.css";
// import { useNavigate } from "react-router-dom";

function DialCode() {
  //   const navigate = useNavigate();
  const [countryCode, setCountryCode] = useState();
  const [activeSuggestion, setActiveSuggestion] = useState();
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [userInput, setUserInput] = useState("");
  //   const [hotels, setHotels] = useState([]);

  //DialCodeFetch
  useEffect(() => {
    // console.log("jhghg");
    axios
      .get("https://countriesnow.space/api/v0.1/countries/codes")
      .then((resp) => {
        //   console.log(resp);

        //   console.log(resp.data.data.map((country) => country.name));
        const countryCodeList = resp.data.data.map(
          (country) => country.name + "" + country.dial_code
        );
        console.log(countryCodeList);
        // setCity(cityList.map((c) => c));
        const allCountryCode = [];
        countryCodeList.map((m) => m.map((c) => allCountryCode.push(c)));
        // console.log(123, cityList.map(m=>m.map(c=>city.push(c))));
        setCountryCode(allCountryCode);
        // console.log(city);
      });
  }, []);

  const onChange = (e) => {
    setUserInput(e.target.value);

    const filteredSuggestions = countryCode?.filter(
      (suggestion) =>
        suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
    );

    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(true);
  };
  const onClick = (e) => {
    setActiveSuggestion(0);
    setFilteredSuggestions(filteredSuggestions);
    setShowSuggestions(false);
    setUserInput(e.target.innerText);
  };
  let suggestionsListComponent;
  if (showSuggestions && userInput) {
    if (filteredSuggestions.length) {
      suggestionsListComponent = (
        <ul className="suggestions">
          {filteredSuggestions.map((suggestion, index) => {
            let className;

            // Flag the active suggestion with a class
            if (index === activeSuggestion) {
              className = "suggestion-active";
            }
            return (
              <li className={className} key={suggestion} onClick={onClick}>
                {suggestion}
              </li>
            );
          })}
        </ul>
      );
    } else {
      suggestionsListComponent = (
        <div class="no-suggestions">
          <em>No suggestions available.</em>
        </div>
      );
    }
  }
  return (
    <>
      <div className="LocationApi">
        <div className="app">
          <>
            <form>
              <div>
                <label>Country Code</label>
                <input
                  type="text"
                  placeholder="Country Code"
                  onChange={onChange}
                  value={userInput}
                />
                {suggestionsListComponent}
              </div>
            </form>
          </>
        </div>
        {/* <div className="hotelsearch">
          <Button type="button" onClick={fetchHotel}>
            Search Hotels
          </Button> */}
        {/* <Button type="button" onClick={()=>}>
            Search Hotels
          </Button> */}
        {/* </div> */}
        {/* <SearchButton hotel={getHotelDetails} /> */}
        {/* <Link to="/HotelDetails" hotellist={this.state.hotels}/> */}
        {/* <div className="hotelImg">
          {hotels?.map((m) => {
            return <HotelDetails hotelSuggestions={m} />;
          })}
        </div> */}
        {/* <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happen!</h2> */}
        {/* <HotelApi suggestions={city} /> */}
      </div>
    </>
  );
}
export default LocationFetch;
