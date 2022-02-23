// import "./styles.css";
import HotelDetails from "./HotelDetails";
import React, { useEffect, useState } from "react";
import axios from "axios";
// import { Button } from "react-bootstrap";
// import "./hotelapi.css";
import { useNavigate } from "react-router-dom";
import HotelSearchButton from "./HotelSearchButton";
function HotelFetch(city) {
  const navigate = useNavigate();

  const userInput = city.goingTo;
  // console.log("hotelpage input:", userInput);

  const fetchHotel = () => {
    console.log("FetchHotel called");
    var options = {
      method: "GET",
      url: "https://hotels4.p.rapidapi.com/locations/v2/search",
      params: { query: userInput },

      headers: {
        "x-rapidapi-host": "hotels4.p.rapidapi.com",
        "x-rapidapi-key": "83296d5a16msh0a890dc8dfd732ap16d478jsnebd2ed4b3682",
      },
    };
    axios

      .request(options)

      .then((response) => {
        // console.log(response);
        const hotelsList = response.data.suggestions
          .filter((s) => s.group === "HOTEL_GROUP")[0]
          .entities.map((h) => h);
        console.log(hotelsList);
        // return hotelsList
        navigate("/HotelDetails", { state: { hotelsList, userInput } });
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  return (
    <>
      <div className="hotelsearch">
        <HotelSearchButton onClick={fetchHotel} />
        {/* <Button type="button" onClick={fetchHotel}>
          Search Hotels
        </Button> */}
      </div>
    </>
  );
}
export default HotelFetch;

//class component

// import React, { Component, Fragment } from "react";
// import "./hotelapi.css";
// import HotelDetails from "./HotelDetails";
// import axios from "axios";
// // import { Button } from "react-bootstrap";
// import SearchButton from "./SearchButton";
// // import { useNavigate } from "react-router-dom";

// class Autocomplete extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       activeSuggestion: 0,
//       filteredSuggestions: [],
//       showSuggestions: false,
//       userInput: "",
//       hotels: [],
//     };
//   }

//   getHotelDetails = () => {
//     var options = {
//       method: "GET",
//       url: "https://hotels4.p.rapidapi.com/locations/v2/search",
//       params: { query: this.state.userInput },
//       headers: {
//         "x-rapidapi-host": "hotels4.p.rapidapi.com",
//         "x-rapidapi-key": "359ba0004amshcbaf943166b833fp15b766jsn0992fab209bf",
//       },
//     };
//     axios

//       .request(options)

//       .then((response) => {
//         const hotelsList = response.data.suggestions
//           .filter((s) => s.group === "HOTEL_GROUP")[0]
//           .entities.map((h) => (
//             <div>
//               <div>
//                 <b>Name: </b>
//                 {h.name}
//               </div>
//               <div>
//                 <b>Price: </b>
//                 {h.destinationId.slice(0, 3)}
//               </div>
//             </div>
//           ));

//         this.setState({ hotels: hotelsList });
//         console.log(hotelsList);
//       })
//       .catch(function (error) {
//         console.error(error);
//       });
//     // navigate("/HotelDetails");
//   };
//   onChange = (e) => {
//     const { suggestions } = this.props;
//     const userInput = e.currentTarget.value;

//     const filteredSuggestions = suggestions.filter(
//       (suggestion) =>
//         suggestion.toLowerCase().indexOf(userInput.toLowerCase()) > -1
//     );

//     this.setState({
//       activeSuggestion: 0,
//       filteredSuggestions,
//       showSuggestions: true,
//       userInput: e.currentTarget.value,
//     });
//   };
//   onClick = (e) => {
//     this.setState({
//       activeSuggestion: 0,
//       filteredSuggestions: [],
//       showSuggestions: false,
//       userInput: e.currentTarget.innerText,
//     });
//   };

//   render() {
//     const {
//       onChange,
//       onClick,

//       state: {
//         activeSuggestion,
//         filteredSuggestions,
//         showSuggestions,
//         userInput,
//       },
//     } = this;
//     console.log(this.state);
//     // const { navigate } = this.props.navigate;
//     let suggestionsListComponent;
//     if (showSuggestions && userInput) {
//       if (filteredSuggestions.length) {
//         suggestionsListComponent = (
//           <ul className="suggestions">
//             {filteredSuggestions.map((suggestion, index) => {
//               let className;

//               // Flag the active suggestion with a class
//               if (index === activeSuggestion) {
//                 className = "suggestion-active";
//               }
//               return (
//                 <li className={className} key={suggestion} onClick={onClick}>
//                   {suggestion}
//                 </li>
//               );
//             })}
//           </ul>
//         );
//       } else {
//         suggestionsListComponent = (
//           <div class="no-suggestions">
//             <em>No suggestions available.</em>
//           </div>
//         );
//       }
//     }
//     return (
//       <>
//         <div className="app">
//           <Fragment>
//             <form>
//               <div>
//                 <input
//                   type="text"
//                   placeholder="Going To"
//                   onChange={onChange}
//                   value={userInput}
//                 />
//                 {suggestionsListComponent}
//               </div>
//               {/* <div className="hotelsearch">
//                 <Button type="button" onClick={this.getHotelDetails}>
//                   Search Hotels
//                 </Button>
//               </div> */}
//             </form>
//           </Fragment>
//         </div>
//         <SearchButton hotel={this.getHotelDetails} />
//         {/* <Link to="/HotelDetails" hotellist={this.state.hotels}/> */}
//         <div className="hotelImg">
//           {this.state.hotels.map((m) => {
//             return <HotelDetails hotelSuggestions={m} />;
//           })}
//         </div>
//       </>
//     );
//   }
// }
// export default Autocomplete;
// // export default function (props) {
// //   const navigate = useNavigate();
// //   return <Autocomplete {...props} navigate={navigate} />;
// // }
