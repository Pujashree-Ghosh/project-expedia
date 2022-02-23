import React from "react";
import { Grid, ButtonBase } from "@material-ui/core";
import HotelImg from "../images/Hotel.jpg";
import "./HotelCards.css";
// import { Container } from "react-bootstrap";

function HotelCards({ hotelSuggestions }) {
  // console.log(hotelSuggestions);
  return (
    <div>
      {/* <Container className="HotelCard"> */}
      <Grid
        className="detailsbox"
        sx={{
          margin: "auto",
          maxWidth: 500,
          flexGrow: 1,
        }}
      >
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase sx={{ width: 128, height: 128 }}>
              <img
                clasName="banner3"
                src={HotelImg}
                alt="Hotel"
                style={{
                  height: "180px",
                  width: "390",
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                }}
              />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid
                item
                xs
                style={{
                  align: "center",
                  textAlign: "justify",
                  marginTop: "30px",
                }}
              >
                {hotelSuggestions}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {/* </Container> */}
    </div>
  );
}

export default HotelCards;
