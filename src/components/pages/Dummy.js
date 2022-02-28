import React, { useState } from "react";
import "./Dummy.css";
import { Tabs, Tab, Typography, Checkbox } from "@material-ui/core";
import { Grid, ButtonBase, Button } from "@material-ui/core";
import GoingTo from "./GoingTo";

const Panel = (props) => (
  <div hidden={props.value !== props.index}>
    <Typography>{props.children}</Typography>
  </div>
);
function Responsive() {
  //tab toggeling
  const [index, setIndex] = useState(0);
  const onTabClick = (event, index) => {
    setIndex(index);
  };
  return (
    <>
      <div>
        {/* <div
          class="row justify-content-center"
          style={{
            // backgroundColor: "rgb(241, 241, 253)",
            marginTop: "0px",
            marginRight: "0px",
            marginLeft: "0px",
          }}
        >
          <Grid
            className="dummytab"
            sx={{
              margin: "auto",
              maxWidth: 500,
              flexGrow: 1,
            }}
          >
            <Grid container spacing={2}>
              <Grid item></Grid>

              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid
                    item
                    xs
                    style={{
                      align: "center",
                      textAlign: "justify",
                      // marginTop: "30px",
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    ></Typography>
                    <Typography
                      gutterBottom
                      variant="subtitle1"
                      component="div"
                    ></Typography>

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

                  <Grid item xs></Grid>
                </Grid>
              </Grid>
              <Grid item>
                <Grid item container direction="column" spacing={0}>
                  <Grid item xs></Grid>

                  <Grid item xs></Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </div> */}
      </div>
      <div class="dummy">
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
          <div
            class="col-10 dummytab"
            style={{
              // backgroundColor: "rgb(241, 241, 102)",
              marginTop: "0px",
              marginRight: "0px",
              marginLeft: "0px",
            }}
          >
            {/* <div
              class="col-9"
              style={{
                backgroundColor: "rgb(241, 119, 102)",
              }}
            > */}
            <Tabs
              // centered
              value={index}
              onChange={onTabClick}
              style={{
                backgroundColor: "beige",
                padding: "0px",
                marginLeft: "0px",
                display: "flex",
              }}
            >
              <Tab label="Stays" />
              <Tab label="Flights" />
              <Tab label="Cars" />
              <Tab label="Packages" />
              <Tab label="Things To Do" />
            </Tabs>
            <Panel value={index} index={0}>
              <GoingTo />
            </Panel>

            {/* </div> */}
            {/* <div className="tabbtn">
              <button>Stays</button>
              <button>Flight</button>
              <button>Cars</button>
              <button>Packages</button>
              <button>Things to do</button>
            </div> */}
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
