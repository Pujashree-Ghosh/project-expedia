// import "./styles.css";
import HotelDetails from "./HotelDetails";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Button } from "react-bootstrap";
import "./hotelapi.css";
import { useNavigate } from "react-router-dom";
import Select from "react-select";

function LocationFetch() {
  const navigate = useNavigate();

  const [city, setCity] = useState();
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value) => {
    setSelectedValue(value);
  };
  // const [activeSuggestion, setActiveSuggestion] = useState();
  // const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  // const [showSuggestions, setShowSuggestions] = useState(false);
  // const [userInput, setUserInput] = useState("");
  // const [hotels, setHotels] = useState([]);

  //LocationFetch
  useEffect(() => {
    console.log("fetchCode");
    axios
      .post("https://countriesnow.space/api/v0.1/countries/cities", {
        country: "india",
      })
      .then((resp) => {
        console.log(resp);
        const countryCodes = resp.data.data;
        console.log(countryCodes);
        setCity(countryCodes);
      });
  }, []);
  const options = [];
  //console.log(code);
  city?.map((value) => {
    // console.log(value);
    // value.map((val) => {
    //console.log(value.name, value.code);
    options.push({
      label: `${value}`,
      value: `${value}`,
    });
  });
  // console.log(city);

  //HotelFetch
  //   useEffect(() => {

  //   }, []);
  const fetchHotel = () => {
    console.log("FetchHotel called");
    // console.log(selectedValue);
    // console.log(selectedValue.value);
    const userInput = selectedValue.value;
    console.log(userInput);
    var options = {
      method: "GET",
      url: "https://hotels4.p.rapidapi.com/locations/v2/search",
      params: { query: userInput },
      //   headers: {
      //     "x-rapidapi-host": "hotels4.p.rapidapi.com",
      //     "x-rapidapi-key": "359ba0004amshcbaf943166b833fp15b766jsn0992fab209bf",
      //   }

      headers: {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "83296d5a16msh0a890dc8dfd732ap16d478jsnebd2ed4b3682",
      },
    };
    axios

      .request(options)

      .then((response) => {
        console.log(response);
        const hotelsList = response.data.suggestions
          .filter((s) => s.group === "HOTEL_GROUP")[0]
          .entities.map(
            (h) => h
            // <div>
            //   <div>
            //     <b>Name: </b>
            //     {h.name}
            //   </div>
            //   <div>
            //     <b>Price: </b>
            //     {h.destinationId.slice(0, 3)}
            //   </div>
            // </div>
          );

        // setHotels(hotelsList);
        // console.log(hotelsList, hotels);

        navigate("/HotelDetails", { state: { hotelsList, userInput } });
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  // const onChange = (e) => {
  //   setUserInput(e.target.value);
  // console.log(userInput);
  // const { suggestions } = city;
  // console.log(suggestions);
  // const userInput = e.target.value;

  //   const filteredSuggestions = city?.filter(
  //     (suggestion) =>
  //       suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
  //   );

  //   setActiveSuggestion(0);
  //   setFilteredSuggestions(filteredSuggestions);
  //   setShowSuggestions(true);
  // };
  // const onClick = (e) => {
  //   setActiveSuggestion(0);
  //   setFilteredSuggestions(filteredSuggestions);
  //   setShowSuggestions(false);
  //   setUserInput(e.target.innerText);
  // };
  // let suggestionsListComponent;
  // if (showSuggestions && userInput) {
  //   if (filteredSuggestions.length) {
  //     suggestionsListComponent = (
  //       <ul className="suggestions">
  //         {filteredSuggestions.map((suggestion, index) => {
  //           let className;

  //           // Flag the active suggestion with a class
  //           if (index === activeSuggestion) {
  //             className = "suggestion-active";
  //           }
  //           return (
  //             <li className={className} key={suggestion} onClick={onClick}>
  //               {suggestion}
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     );
  //   } else {
  //     suggestionsListComponent = (
  //       <div class="no-suggestions">
  //         <em>No suggestions available.</em>
  //       </div>
  //     );
  //   }
  // }
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
      {/* <div className="LocationApi">
        <div className="app">
          <>
            <form>
              <div>
                <input
                  type="text"
                  placeholder="Going To"
                  onChange={onChange}
                  value={userInput}
                />
                {suggestionsListComponent}
              </div>
            </form>
          </>
        </div> */}
      <div className="hotelsearch">
        <Button type="button" onClick={fetchHotel}>
          Search Hotels
        </Button>
        {/* <Button type="button" onClick={()=>}>
            Search Hotels
          </Button> */}
      </div>
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
      {/* </div> */}
    </>
  );
}
export default LocationFetch;
