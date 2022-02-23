import React from "react";
import "./Footer.css";

import { Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
// import image6 from "../images/image6.jpg";
// import qrcode from "../images/qrcode1.png";
import EG2 from "../images/EG3.png";
import Footerimg from "../images/footer2.png";

function Footer() {
  return (
    <div className="footerbody">
      {/* <div>
        <Grid
          className="gridbox"
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
                  src={image6}
                  alt="image6"
                  style={{
                    height: "300px",
                    width: "410px",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    zIndex: "1",
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
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <h1>Plan your trip in a snap on the app</h1>
                    From home or hammoerk, organise your entire escape a explore
                    explore app offers
                  </Typography>
                  <Typography gutterBottom variant="subtitle1" component="div">
                    <h3>Text yourself a download link</h3>
                  </Typography>

                  <Button
                    variant="outlined"
                    style={{ padding: "10px", margin: "5px" }}
                  >
                    Country Code
                  </Button>
                  <Button
                    style={{ padding: "10px", margin: "5px" }}
                    variant="outlined"
                  >
                    Phone Number
                  </Button>
                  <Button
                    className="btn"
                    style={{ padding: "10px", margin: "5px" }}
                    variant="contained"
                  >
                    Get the app
                  </Button>
                </Grid>

                <Grid item xs>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    style={{
                      fontSize: "12px",
                      align: "center",
                      textAlign: "left",
                    }}
                  >
                    By providing your number, you agree to receive a one-time
                    automated text message with a link to get the app. Standard
                    text message rates may apply.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Grid item container direction="column" spacing={0}>
                <Grid item xs>
                  <img
                    src={qrcode}
                    alt="qrcode"
                    style={{
                      height: "150px",
                      width: "150px",
                      padding: "10px",
                      align: "center",
                      marginTop: "50px",
                    }}
                  />
                </Grid>

                <Grid item xs>
                  <Typography
                    className="caption"
                    variant="body2"
                    style={{
                      fontSize: "13px",
                      textAlign: "center",
                    }}
                  >
                    Scan QR code
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div> */}
      <div>
        <Grid
          className="links"
          sx={{
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
          }}
        >
          <Grid container spacing={2}>
            {/* 1stRow  */}
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={8}>
                <Grid item xs style={{ align: "center", textAlign: "center" }}>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    style={{ fontsize: "10px" }}
                  >
                    <h4>Explore a world of travel with Expedia</h4>
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    style={{ fontsize: "8px" }}
                  >
                    Discover new places and experiences
                  </Typography>
                </Grid>
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
                    <Grid
                      item
                      xs
                      style={{ align: "center", textAlign: "left" }}
                    >
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        <h4>Company</h4>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        <Link to="/AboutUs" style={{ textDecoration: "none" }}>
                          {" "}
                          About Us
                        </Link>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Jobs{" "}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        List Your Property{" "}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Partnerships
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs
                      style={{ align: "center", textAlign: "left" }}
                    >
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        <h4>Explore</h4>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        India Travel Guide{" "}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Hotels in India{" "}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Holiday rentals in India{" "}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Holiday packages in India
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Domestic Flights
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Car hire in India
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Holiday packages in India
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        All accomodation types
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Travel blog
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs
                      style={{ align: "center", textAlign: "left" }}
                    >
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        <h4>Terms and Policies</h4>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Privacy Statement{" "}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Terms of Use{" "}
                      </Typography>
                    </Grid>
                    <Grid
                      item
                      xs
                      style={{ align: "center", textAlign: "left" }}
                    >
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        <h4>Help</h4>
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Support{" "}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Change or cancel your booking{" "}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Refund process and timelines{" "}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        Book a flight using an airline credit
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="subtitle1"
                        component="div"
                      >
                        International travel documents
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div>
        <Grid
          className="footer"
          sx={{
            margin: "auto",
            maxWidth: 500,
            flexGrow: 1,
          }}
        >
          <Grid container spacing={2}>
            {/* 1stRow  */}
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column" spacing={8}>
                <Grid item xs style={{ align: "center", textAlign: "center" }}>
                  <Grid item>
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
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <hr
            style={{
              width: "1240px",
              color: "black",
            }}
          ></hr>
          <Grid container spacing={2}>
            <Grid item xs={12} sm container>
              <Grid item xs container direction="column">
                <Grid item xs style={{ align: "center", textAlign: "center" }}>
                  <Grid item>
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
                      © 2021 Expedia, Inc., an Expedia Group company / Expedia
                      Asia Holdings Mauritius / BEX Travel Asia Pte. Ltd. All
                      rights reserved. Expedia and the Airplane Logo are
                      trademarks or registered trademarks of Expedia, Inc.
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
