import React from "react";
import { Grid, Typography } from "@material-ui/core";
// import { styled } from "@mui/material/styles";
import "./support.css";
import Footer from "../images/footer2.png";

// import { mergeClasses } from "@material-ui/styles";

// const Img = styled("img")({
//   margin: "auto",
//   display: "block",
//   maxWidth: "100%",
//   maxHeight: "100%",
// });

const Support = () => {
  return (
    <>
      <Grid
        className="applink"
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
                    src={Footer}
                    alt="Footer"
                    style={{
                      height: "30px",
                      width: "100px",
                      // borderTopLeftRadius: "10px",
                      // borderBottomLeftRadius: "10px",
                    }}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <hr style={{ width: "1240px" }}></hr>
        <Grid container spacing={2}>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={8}>
              <Grid item xs style={{ align: "center", textAlign: "center" }}>
                <Grid item>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    component="div"
                    style={{ fontsize: "8px" }}
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
    </>
  );
};

export default Support;
