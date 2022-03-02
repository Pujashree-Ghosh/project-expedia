import React, { useState, useEffect } from "react";
import "./GetTheApp.css";
import image6 from "../images/image6.jpg";
import qrcode from "../images/qrcode1.png";
import { Grid, ButtonBase, Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
import Select from "react-select";
import axios from "axios";

function GetTheApp() {
  const [code, setCode] = useState();
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    //console.log("fetchCode");
    axios
      .get("https://countriesnow.space/api/v0.1/countries/codes")
      .then((resp) => {
        //console.log(resp);
        const countryCodes = resp.data.data;
        //console.log(countryCodes);
        setCode(countryCodes);
      });
  }, []);
  const options = [];
  //console.log(code);
  code?.map((value) => {
    // value.map((val) => {
    //console.log(value.name, value.code);
    options.push({
      label: [`${value.name}`, " ", `${value.dial_code}`],
      value: `${value.code}`,
    });

    // });
  });
  return (
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
        <div class="col-10"> */}
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
              <div className="getappimage">
                <img
                  // clasName="getappimage"
                  src={image6}
                  alt="image6"
                  style={{
                    height: "340px",
                    width: "410px",
                    borderTopLeftRadius: "10px",
                    borderBottomLeftRadius: "10px",
                    zIndex: "1",
                  }}
                />
              </div>
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
                <div class="row">
                  <div class="col-4">
                    <Select
                      className="countrycodebtn"
                      defaultValue={selectedValue}
                      options={options}
                      onChange={handleChange}
                      isClearable={true}
                      placeholder="Country Code"
                      // style={{ width: "30px" }}
                    ></Select>
                  </div>
                  <div
                    class="col-4 phonenumber"
                    style={{
                      // backgroundColor: "red",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      style={{
                        // padding: "10px",
                        // margin: "5px",
                        width: "100%",
                      }}
                      variant="outlined"
                    >
                      Phone Number
                    </Button>
                  </div>
                  <div
                    class="col-4 "
                    style={{
                      // backgroundColor: "red",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      className="btn"
                      style={{
                        // padding: "10px",
                        // margin: "5px",
                        width: "100%",
                      }}
                      variant="contained"
                    >
                      Get the app
                    </Button>
                  </div>
                </div>
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
                {/* <Button
                    variant="outlined"
                    style={{ padding: "10px", margin: "5px" }}
                  >
                    Country Code
                  </Button> */}
              </Grid>
              {/* <Grid item xs></Grid> */}
              {/* <Grid item xs>
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
                </Grid> */}
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
      {/* </div>
      </div> */}
    </div>
  );
}

export default GetTheApp;
