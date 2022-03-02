import React from "react";
// import "./FooterLinks.css";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import EG2 from "../images/EG3.png";

function FooterLinks() {
  return (
    <>
      <div class="row" style={{ marginTop: "40px" }}>
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
        style={{
          display: "flex",
          justifyContent: " center",
          marginTop: "20px",
        }}
      >
        <hr
          style={{
            // width: "1240px",
            color: "black",
          }}
        ></hr>
      </div>
    </>
  );
}

export default FooterLinks;
