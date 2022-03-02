import React from "react";
// import "./Footer.css";

import { Typography } from "@material-ui/core";
// import { Link } from "react-router-dom";
// import image6 from "../images/image6.jpg";
// import qrcode from "../images/qrcode1.png";
import Footerimg from "../images/footer2.png";

function Footer() {
  return (
    <>
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
      {/* <div class="row" style={{ display: "flex", justifyContent: " center" }}>
          <hr
            style={{
              width: "1240px",
              color: "black",
            }}
          ></hr>
        </div> */}
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
          © 2021 Expedia, Inc., an Expedia Group company / Expedia Asia Holdings
          Mauritius / BEX Travel Asia Pte. Ltd. All rights reserved. Expedia and
          the Airplane Logo are trademarks or registered trademarks of Expedia,
          Inc.
        </Typography>
      </div>
    </>
  );
}

export default Footer;
