import React from "react";
import { Grid, ButtonBase } from "@material-ui/core";
import HotelImg from "../images/Hotel.jpg";
import "./flightcard.css";
// import { Container } from "react-bootstrap";

function FlightCard({ flightSuggestions }) {
  // console.log(hotelSuggestions);
  return (
    <div>
      {/* <Container className="HotelCard"> */}
      <Grid
        className="flightdetailsbox"
        sx={{
          // margin: "auto",
          marginLeft: "0px",
          maxWidth: 500,
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid
                item
                xs
                style={{
                  align: "center",
                  textAlign: "justify",
                  marginTop: "30px",
                  marginBottom: "30px",
                  paddingLeft: "10px",
                }}
              >
                {flightSuggestions}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* </Container> */}
    </div>
  );
}

export default FlightCard;
