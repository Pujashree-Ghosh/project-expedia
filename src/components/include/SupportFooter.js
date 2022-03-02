import React from "react";
// import "./FooterLinks.css";
import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import EG2 from "../images/EG3.png";
import Footerimg from "../images/footer2.png";

function SupportFooter() {
  return (
    <div
      class="row justify-content-center"
      style={{
        backgroundColor: "rgb(241, 241, 253)",
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
        <div class="row" style={{ display: "flex", justifyContent: " center" }}>
          <hr
            style={{
              width: "1240px",
              color: "black",
            }}
          ></hr>
        </div>
        <div class="row" style={{ display: "flex", justifyContent: " center" }}>
          <img
            clasName="banner3"
            src={Footerimg}
            alt="Footer"
            style={{
              height: "80px",

              width: "200px",
              // borderTopLeftRadius: "10px",
              // borderBottomLeftRadius: "10px",
            }}
          />
        </div>
        <div class="row">
          <Typography
            gutterBottom
            variant="subtitle1"
            component="div"
            style={{
              fontSize: "10px",
              textAlign: "center",
              marginTop: "15px",
              marginBottom: "15px",
            }}
          >
            © 2021 Expedia, Inc., an Expedia Group company / Expedia Asia
            Holdings Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved.
            Expedia and the Airplane Logo are trademarks or registered
            trademarks of Expedia, Inc.
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default SupportFooter;
