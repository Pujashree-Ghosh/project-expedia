import React from "react";
import Footer from "../include/Footer";
import FooterLinks from "../include/FooterLinks";
import GetTheApp from "../include/GetTheApp";

import "./home.css";
import TabModule from "./Tab.js";

import { Button } from "@material-ui/core";
import image2 from "../images/img1.jpg";
import image5 from "../images/image5.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Container } from "react-bootstrap";
const Home = () => {
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
          <TabModule />

          {/* <Container className="HomeCard"> */}
          <Card className="card1" expand="lg" bg="light" variant="light">
            <Card.Body className="card2.body">
              <h4>Changes are coming to Expedia Rewards</h4>
              We're introducing changes to our programme from 2 Febraury 2022.
              <Card.Link role="link" tabindex="0" href="#">
                Learn More
              </Card.Link>
            </Card.Body>
          </Card>
          {/* </Container> */}

          {/* <Container className="HomeCard"> */}
          <Card className="card2 bg-muted text-black ">
            <Card.Img
              class="img rounded-3"
              src={image2}
              style={{ height: "375px" }}
              alt="image"
            />
            <Card.ImgOverlay>
              <Card.Text>
                <h3>Save instantly with Expedia Rewards</h3>
                You can enjoy access to perks like Member Prices, saving you 10%
                or more on select hotels. Terms may apply
              </Card.Text>
              <Button variant="primary">See Member Prices</Button>
            </Card.ImgOverlay>
          </Card>
          {/* </Container> */}

          {/* <Container className="HomeCard"> */}
          <Card className="card3 bg-muted text-black ">
            <Card.Img
              href="#"
              class="img rounded-3"
              src={image5}
              style={{ height: "200px" }}
              alt="image5"
            />
            <Card.ImgOverlay>
              <Card.Text>
                <h3>Plan ahead and save</h3>
                Book 60 days in advance for 20% off select stays.
              </Card.Text>
              <Card.Link href="#">Learn More</Card.Link>
            </Card.ImgOverlay>
          </Card>
          {/* </Container> */}
          <GetTheApp />
          <FooterLinks />
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
