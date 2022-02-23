import React, { useState, useEffect } from "react";
import Footer from "../include/Footer";
import GetTheApp from "../include/GetTheApp";
import "./home.css";
import Tab from "./Tab.js";

import { Button } from "@material-ui/core";
import image2 from "../images/img1.jpg";
import image5 from "../images/image5.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
const Home = () => {
  return (
    <>
      <div>
        <Tab />
      </div>

      <div>
        <Card className="card2" expand="lg" bg="light" variant="light">
          <Card.Body className="card2.body">
            <h4>Changes are coming to Expedia Rewards</h4>
            We're introducing changes to our programme from 2 Febraury 2022.
            <Card.Link href="#">Learn More</Card.Link>
          </Card.Body>
        </Card>
      </div>

      <div>
        <Card className="card3 bg-muted text-black ">
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
      </div>

      <div>
        <Card className="card4 bg-muted text-black ">
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
      </div>

      <GetTheApp />
      <Footer />
    </>
  );
};

export default Home;
