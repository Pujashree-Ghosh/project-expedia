import React, { useState } from "react";
// import "./Dummy.css";
import { Tabs, Tab, Typography, Checkbox } from "@material-ui/core";
import { Grid, ButtonBase, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import EG2 from "../images/EG3.png";
import Footerimg from "../images/footer2.png";

function Responsive() {
  return (
    <>
      <div
        class="row justify-content-center"
        style={{
          // backgroundColor: "rgb(241, 241, 253)",
          marginTop: "0px",
          marginRight: "0px",
          marginLeft: "0px",
          margin: "0px",
        }}
      >
        <div class="col-10 ">
          <div class="row">
            <div
              style={{
                display: "flex",
                justifyContent: " center",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              Explore a world of travel with Expedia
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: " center",
                fontsize: "8px",
                marginBottom: "30px",
              }}
            >
              Discover new places and experiences
            </div>
          </div>

          <div class="row">
            <Grid
              item
              xs
              direction="row"
              sm
              container
              spacing={4}
              style={{ marginLeft: "5px" }}
            >
              <Grid item>
                <img
                  clasName="banner3"
                  src={EG2}
                  alt="image6"
                  style={{
                    height: "22px",
                    width: "100px",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                  }}
                />
              </Grid>
              <Grid item xs direction="row" sm container spacing={4}>
                <Grid item xs style={{ align: "center", textAlign: "left" }}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <h4>Company</h4>
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <Link to="/AboutUs" style={{ textDecoration: "none" }}>
                      {" "}
                      About Us
                    </Link>
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Jobs{" "}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    List Your Property{" "}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Partnerships
                  </Typography>
                </Grid>
                <Grid item xs style={{ align: "center", textAlign: "left" }}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <h4>Explore</h4>
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    India Travel Guide{" "}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Hotels in India{" "}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Holiday rentals in India{" "}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Holiday packages in India
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Domestic Flights
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Car hire in India
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Holiday packages in India
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    All accomodation types
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Travel blog
                  </Typography>
                </Grid>
                <Grid item xs style={{ align: "center", textAlign: "left" }}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <h4>Terms and Policies</h4>
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Privacy Statement{" "}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Terms of Use{" "}
                  </Typography>
                </Grid>
                <Grid item xs style={{ align: "center", textAlign: "left" }}>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <h4>Help</h4>
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Support{" "}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Change or cancel your booking{" "}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Refund process and timelines{" "}
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    Book a flight using an airline credit
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    International travel documents
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </div>
          <div
            class="row"
            style={{ display: "flex", justifyContent: " center" }}
          >
            <hr
              style={{
                width: "1240px",
                color: "black",
              }}
            ></hr>
          </div>
        </div>
      </div>

      {/* <div class="row">
        <div class="col-3 menu">
          <ul>
            <li>The Flight</li>
            <li>The City</li>
            <li>The Island</li>
            <li>The Food</li>
          </ul>
        </div>

        <div class="col-6">
          <h1>The City</h1>
          <p>
            Chania is the capital of the Chania region on the island of Crete.
            The city can be divided in two parts, the old town and the modern
            city.
          </p>
        </div>

        <div class="col-3 right">
          <div class="aside">
            <h2>What?</h2>
            <p>Chania is a city on the island of Crete.</p>
            <h2>Where?</h2>
            <p>Crete is a Greek island in the Mediterranean Sea.</p>
            <h2>How?</h2>
            <p>You can reach Chania airport from all over Europe.</p>
          </div>
        </div>
      </div> */}
    </>
  );
}
export default Responsive;
